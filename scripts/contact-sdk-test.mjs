import assert from 'node:assert/strict';

process.env.RESEND_API_KEY = 're_test_placeholder';
process.env.CONTACT_FROM = 'HB Infinite <contact@hbinfinite.nl>';
process.env.CONTACT_TO = 'info@hbinfinite.nl';
const { POST } = await import('../app/api/contact/route.js');
const realFetch = globalThis.fetch;
let mode = 'success';
let calls = 0;
globalThis.fetch = async (url, options) => {
  calls++;
  assert.equal(String(url), 'https://api.resend.com/emails');
  assert.equal(options.method, 'POST');
  const headers = new Headers(options.headers);
  assert.equal(headers.get('authorization'), 'Bearer re_test_placeholder');
  const payload = JSON.parse(options.body);
  assert.equal(payload.from, process.env.CONTACT_FROM);
  assert.deepEqual(payload.to, [process.env.CONTACT_TO]);
  assert.equal(payload.reply_to, 'test@example.com');
  assert.ok(payload.html.includes('&lt;script&gt;'));
  assert.ok(!payload.html.includes('<script>'));
  assert.ok(payload.html.includes('School &amp; Co'));
  if (mode === 'network') throw new Error('Simulated network failure');
  if (mode === 'error') return Response.json({ name: 'validation_error', message: 'Simulated rejection' }, { status: 422 });
  return Response.json({ id: 'test-message-id' });
};
const request = () => new Request('http://localhost/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ naam: 'SDK test', email: 'test@example.com', school: 'School & Co', bericht: '<script>alert(1)</script>' }),
});
try {
  const success = await POST(request());
  assert.equal(success.status, 200);
  assert.deepEqual(await success.json(), { success: true });
  mode = 'error';
  const rejected = await POST(request());
  assert.equal(rejected.status, 500);
  assert.deepEqual(await rejected.json(), { error: 'Verzenden mislukt' });
  mode = 'network';
  assert.equal((await POST(request())).status, 500);
  assert.equal(calls, 3);
  console.log('Resend SDK contract checks passed: recipient, reply-to, HTML escaping, success, provider rejection and network failure. No email was sent.');
} finally {
  globalThis.fetch = realFetch;
}
