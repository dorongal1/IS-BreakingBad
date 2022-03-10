import './App.css';
import BreakingBed from './components/BreakingBed';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(24,129,70)',
    },
    secondary: {
      main: 'rgb(117,117,117)',
    },
  },
});


function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <BreakingBed ></BreakingBed>
      </ThemeProvider>
    </div >
  );
}

export default App;
