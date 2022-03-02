import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Order';
import Print from './pages/Print';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/print/:orderId' element={<Print/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
