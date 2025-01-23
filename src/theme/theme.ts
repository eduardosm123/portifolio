import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Cores para o tema claro
            primary: {
              main: '#1976d2',
            },
            background: {
              default: '#ffffff',
              paper: '#f5f5f5',
            },
          }
        : {
            // Cores para o tema escuro
            primary: {
              main: '#90caf9',
            },
            background: {
              default: '#121212',
              paper: '#1d1d1d',
            },
          }),
    },
  });
