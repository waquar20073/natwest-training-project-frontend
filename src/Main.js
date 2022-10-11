import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import React from 'react';
import useToken from './sessionManagement/useToken';
import RegisterComponent from './components/RegisterComponent';
import Header from './components/header/header';
import Bankinfo from './components/carousel/bankinfo';
import Footer from './components/footer/footer';

import Dashboard from './components/BankDetails/Dashboard';
import Accounts from './components/CustomerAccounts/Accounts';
import TransferMoney from './components/Transfer/TransferMoney';
import TransactionHistory from './components/Transactions/TransactionHistory';
import Alerting from './components/Alert';
import ReportComponent from './components/Reports/ReportComponent';
import Statements from './components/BankStatements/Statements';
import MyProfile from './components/Profile/MyProfile';
import Reset from './components/Reset/reset';



function Main()  {
 
  const { setToken,token} = useToken();

  if(!token) {
    return (
      <div>
    <Header/>
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Bankinfo />}/>
            <Route path='/home' element={<Bankinfo />}/>
            <Route path='/signup' element={<RegisterComponent />} /> 
            <Route path='/login' element={<LoginComponent setToken={setToken}/>} />
            <Route path='/bankDetails' element={<Dashboard/>} /> 
            <Route path='/account' element={<Accounts />}/>
            <Route path='/transfer' element={<TransferMoney />}/>
            <Route path='/transactions' element={<TransactionHistory />}/>
            <Route path='/alert' element={<Alerting/>}/>
            <Route path='/reports' element={<ReportComponent/>}/>
            <Route path='/statements' element={<Statements/>}/>
            <Route path='/profile' element={<MyProfile/>}/>
            <Route path='/reset' element={<Reset/>}/>
            
      </Routes>
    </BrowserRouter> 
    <Footer/>
    </div>
    );  
  }
 
  return (
    <div>
      
      <BrowserRouter>
            <Routes>                
                  <Route path='/' element={<Bankinfo />}/>
                  <Route path='/home' element={<Bankinfo />}/>
                  <Route path='/login' element={<LoginComponent/>} />
                  <Route path='/signup' element={<RegisterComponent />} /> 
                  <Route path='/bankDetails' element={<Dashboard/>}/>
                  <Route path='/account' element={<Accounts />}/>
                  <Route path='/transfer' element={<TransferMoney />}/>
                  <Route path='/transactions' element={<TransactionHistory />}/>
                  <Route path='/alert' element={<Alerting/>}/>
                  <Route path='/reports' element={<ReportComponent/>}/>
                  <Route path='/statements' element={<Statements/>}/>
                  <Route path='/profile' element={<MyProfile/>}/>
                  <Route path='/reset' element={<Reset/>}/>
                 
            </Routes>
        </BrowserRouter>    
      <Footer/>
    </div>
  );
}

export default Main;
