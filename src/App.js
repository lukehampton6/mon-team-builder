import './App.css';
import Search from './components/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Search />
    </ThemeProvider>
  );
}

export default App;
