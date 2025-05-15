import React from 'react';
import Contener from './contener';
import './App.css';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik, sans-serif',
        allVariants: {
            color: '#000',
        },
    },})

function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <Typography>
            <div className="App">
              <header className="App-header">
                <Contener />
              </header>
            </div>
          </Typography>
        </ThemeProvider>
    </>
  ); 
};

export default App;
