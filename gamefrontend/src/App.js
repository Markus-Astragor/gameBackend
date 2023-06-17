import './App.css';
import Mainpage from './Components/Mainpage/Mainpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Register  from './Components/Register/Register'
import  Login  from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<Mainpage/>} path='/'></Route>
          <Route element={<Register />} path='/register'></Route>
          <Route element={<Login />} path='/login'></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
