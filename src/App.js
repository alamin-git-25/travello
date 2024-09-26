import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Register/Login';
import Destination from './Pages/Destination/Destination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Pages/Header/Header.css';
import RequareAuth from './Pages/RequareAuth/RequareAuth';
import Pakages from './Pages/Pakeges/Pakages';

function App() {
  return (
    <div className="bg-base-100 overflow-y-scroll no-scrollbar max-w-7xl min-w-full max-h-fit min-h-full mx-auto">
      
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='destination' element={
          <RequareAuth>
            <Destination />
          </RequareAuth>
        }></Route>
        <Route path='pakeges' element={<Pakages></Pakages>
        }></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
