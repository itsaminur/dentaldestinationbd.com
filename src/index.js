import React from 'react';
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './style.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);