import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import React from 'react';
import useToken from './sessionManagement/useToken';
import RegisterComponent from './components/RegisterComponent';
import Header from './components/header/header';
import Bankinfo from './components/carousel/bankinfo';
import Footer from './components/footer/footer';

function Main()  {
 
  const { setToken,token} = useToken();

  if(!token) {
    return (
      <div>

     <Header/>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Bankinfo />}>
            <Route index element={<LoginComponent setToken={setToken} ></LoginComponent>} />
            <Route path='/signup' element={<RegisterComponent />} /> 
            <Route path='*' element={<LoginComponent setToken={setToken}/>} />
          </Route>
      </Routes>
    </BrowserRouter> 
    <Footer/>
    </div>
    );  
  }
 
  return (
    <div>
      <Header/>
      <BrowserRouter>
            <Routes>                
                  <Route path='/' element={<Bankinfo />}/>
                  <Route path='/home' element={<Bankinfo />}/>
                  <Route path='/login' element={<LoginComponent/>} />
                  <Route path='/signup' element={<RegisterComponent />} /> 
                
            </Routes>
        </BrowserRouter>    
      <Footer/>
    </div>
  );
}

export default Main;
