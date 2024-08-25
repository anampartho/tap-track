import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  mode: 'dark' | 'light';
  isLeftNavDrawerOpen: boolean;
}

const initialState: ThemeState = {
  mode: 'light',
  isLeftNavDrawerOpen: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    toggleLeftNavDrawer: (state) => {
      state.isLeftNavDrawerOpen = !state.isLeftNavDrawerOpen;
    },
  },
});

export const { toggleLeftNavDrawer, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
