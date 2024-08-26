import LeftNavigation from '@/components/LeftNavigation';
import { Box } from '@mui/material';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: 'flex' }}>
      <LeftNavigation />
      <Box flexGrow={1}>
        <Box
          display="flex"
          height={60}
          px={3}
          border="1px solid #eee"
          alignItems="center"
          position="fixed"
          bgcolor="white"
          width="100%"
        >
          Top Nav Placeholder
        </Box>
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, mt: '60px' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
