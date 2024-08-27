import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box } from '@mui/joy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard for Tap Track',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box display="flex" minHeight="100dvh">
      <Header />
      <Sidebar />
      {children}
    </Box>
  );
}
