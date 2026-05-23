import './globals.css';

export const metadata = {
  title: 'HB Infinite – AI voor Onderwijs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
