import './App.css';
import BreakingBad from './components/BreakingBad';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
        <BreakingBad ></BreakingBad>
      </ThemeProvider>
    </div >
  );
}

export default App;
