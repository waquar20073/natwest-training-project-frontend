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
import ReportComponent from './components/Reports/ReportComponent';
import MyProfile from './components/Profile/MyProfile';
import ResetPassword from './components/Reset/resetPassword';
import AddAccount from './components/Non_Linked_accounts/addAccount';




function Main()  {
 
  const {setToken,token} = useToken();
  console.log("Main")

  if(!token) {
    return (
      <div>
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Bankinfo />}/>
            <Route path='/home' element={<Bankinfo />}/>
            <Route path='/signup' element={<RegisterComponent />} /> 
            <Route path='/login' element={<LoginComponent setToken={setToken}/>} />
            <Route path='*' element={<Bankinfo/>} />
            {/* <Route path='/bankDetails' element={<Dashboard/>} /> 
            <Route path='/account' element={<Accounts />}/>
            <Route path='/transfer' element={<TransferMoney />}/>
            <Route path='/transactions' element={<TransactionHistory />}/>
            <Route path='/reports' element={<ReportComponent/>}/>
            <Route path='/profile' element={<MyProfile/>}/> */}
            <Route path='/reset' element={<ResetPassword/>}/>
            
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
                  <Route path='/' element={<Accounts />}/>
                  {/* <Route path='/home' element={<Bankinfo />}/>
                  <Route path='/login' element={<LoginComponent setToken={setToken}/>} />
                  <Route path='/signup' element={<RegisterComponent/>} />  */}
                  <Route path='/bankDetails' element={<Dashboard/>}/>
                  <Route path='/account' element={<Accounts />}/>
                  <Route path='/transfer' element={<TransferMoney />}/>
                  <Route path='/transactions' element={<TransactionHistory />}/>
                  <Route path='/reports' element={<ReportComponent/>}/>
                  <Route path='/profile' element={<MyProfile/>}/>
                  <Route path='/addAccount' element={<AddAccount/>}/>
                  <Route path='*' element={<Accounts/>} />
                  {/* <Route path='/reset' element={<ResetPassword/>}/> */}
                  
            </Routes>
        </BrowserRouter>    
      <Footer/>
    </div>
  );
}

export default Main;
