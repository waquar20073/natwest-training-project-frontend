import React from 'react'
import HeaderLogout from '../header1/headerLogout'

export default function Statements() {
  return (
    <div className='statements'>
      
      <HeaderLogout/>
      <br></br>
      <div className='container'>
        <h1>Statements</h1>
        
        <div className='row'>
          <div className='col-lg-6'><img id="statements_logo"src="" alt=" "></img></div>
          <div className='col-lg-6' id="acc_Det">
            <p>Account Number: 514354144545434</p>
            <p>IFSC Code: 514354144545434</p>
          </div>
        </div>
        <br></br>
      
        <div className='row'>
        <div className='col-lg-12'>
            <div className='table table-striped table-secondary' id="statements_table">
              <thead>
                <tr>
                  <th width="12%">Date</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Credited</th>
                  <th>Debited</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State Bank of India</td>
                  <td>State Bank of India</td>
                  <td>State Bank of India</td>
                  <td>State Bank of India</td>
                  <td>State Bank of India</td>
                  <td>State Bank of India</td>
                </tr>
                <tr>
                  <td>Bellandur</td>
                  <td>Bellandur</td>
                  <td>Bellandur</td>
                  <td>Bellandur</td>
                  <td>Bellandur</td>
                  <td>Bellandur</td>
                </tr>
                <tr>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                </tr>
                <tr>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                </tr>
                <tr>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                  <td>Bangalore , India</td>
                </tr>
                
              </tbody>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
