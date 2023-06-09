import {Routes, Route} from 'react-router-dom';
import { Login } from './routes/Login';
import { User } from './routes/User';
import { Sales } from './routes/Sales';
import { Kitchen } from './routes/Kitchen';
import { Delivery } from './routes/Delivery';
import { Admin } from './routes/Admin';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
        <Header />
        <main className='content'>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path= '/user' element={<User />} />
            <Route path= '/sales' element={<Sales />} />
            <Route path= '/kitchen' element={<Kitchen />} />
            <Route path= '/delivery' element={<Delivery />} />
            <Route path= '/admin' element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
