'use client';
import { createTheme } from '@mui/material/styles';
import { font } from './font';

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

export default theme;
