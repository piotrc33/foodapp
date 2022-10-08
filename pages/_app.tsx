import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react';

// MATERIAL UI
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#fff',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#330B16',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: '#A20532'
    }
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

    </ThemeProvider>
  );
}

export default MyApp
