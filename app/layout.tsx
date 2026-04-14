import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Echo Signal Media',
  description: 'Apps built. Bugs fixed. App Store submissions handled.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}