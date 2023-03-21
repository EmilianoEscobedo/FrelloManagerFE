import {Routes, Route} from 'react-router-dom';
import { Login } from './routes/Login';
import { User } from './routes/User';
import { Sales } from './routes/Sales';
import { Kitchen } from './routes/Kitchen';
import { Delivery } from './routes/Delivery';
import { Admin } from './routes/Admin';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path= '/user' element={<User />} />
        <Route path= '/sales' element={<Sales />} />
        <Route path= '/kitchen' element={<Kitchen />} />
        <Route path= '/delivery' element={<Delivery />} />
        <Route path= '/admin' element={<Admin />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
