import { Box, CssBaseline, CssVarsProvider } from '@mui/joy';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ReactNode } from 'react';

export default function MUIProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <CssVarsProvider>
        <CssBaseline />
        <Box display="flex" minHeight="100dvh">
          {children}
        </Box>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  );
}
