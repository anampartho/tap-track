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
    <Box display="flex" minHeight="100dvh" width="100dvw">
      <Header />
      <Sidebar />
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: 'calc(12px + var(--Header-height))',
            sm: 'calc(12px + var(--Header-height))',
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
