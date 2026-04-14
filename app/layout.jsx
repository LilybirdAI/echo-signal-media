import './globals.css';

export const metadata = {
  title: 'Echo Signal Media',
  description: 'Apps built. Bugs fixed. App Store submissions handled.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}