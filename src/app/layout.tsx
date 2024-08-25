import Providers from '@/providers';
import { font } from '@/utils/font';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js 14 Starter APP',
  description: 'Starter app using Next.js 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
