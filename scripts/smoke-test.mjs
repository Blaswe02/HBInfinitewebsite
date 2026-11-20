import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const base = 'http://127.0.0.1:3100';
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3100'], {
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  stdio: 'inherit',
});

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Next.js exited before becoming ready');
    try {
      const response = await fetch(base, { signal: AbortSignal.timeout(3000) });
      if (response.ok) { ready = true; break; }
    } catch {}
    await delay(500);
  }
  assert.ok(ready, 'Production server must start');
  const page = await fetch(base);
  const html = await page.text();
  assert.ok(html.includes('klas landt'), 'Homepage content must render');
  assert.ok(html.includes('id="diensten"'), 'Services anchor must remain');
  assert.ok(html.includes('id="contact"'), 'Contact anchor must remain');
  assert.equal(page.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(page.headers.get('x-frame-options'), 'DENY');
  assert.ok(page.headers.get('content-security-policy')?.includes("frame-ancestors 'none'"));
  for (const path of ['/hb-logo.png', ...Array.from({ length: 31 }, (_, i) => '/orbs/orb' + (i + 1) + '.png')]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, 'Image must load: ' + path);
    assert.ok(response.headers.get('content-type')?.startsWith('image/'));
  }
  const optimized = await fetch(base + '/_next/image?url=%2Fhb-logo.png&w=640&q=75');
  assert.equal(optimized.status, 200, 'Next.js image optimization must work');
  assert.ok(optimized.headers.get('content-type')?.startsWith('image/'));
  const post = (body) => fetch(base + '/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  assert.equal((await fetch(base + '/api/contact')).status, 405);
  assert.equal((await post({})).status, 400, 'Required fields must be validated');
  assert.equal((await post({ naam: 'Test', email: 'invalid', bericht: 'Validation only' })).status, 400);
  const honeypot = await post({ website: 'bot.example' });
  assert.equal(honeypot.status, 200);
  assert.deepEqual(await honeypot.json(), { success: true });
  console.log('Production smoke checks passed: homepage, headers, 32 images, image optimization and contact validation. No email was sent.');
} finally {
  server.kill('SIGTERM');
}
