import { Row , Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Table from 'react-bootstrap/Table';
import { BarChart, Bar, XAxis, YAxis,Legend,Tooltip,Pie,PieChart,ResponsiveContainer, Label} from 'recharts';
import HeaderLogout from '../header1/headerLogout';
import axios from "axios";
import React, { Component, useState, useEffect } from 'react';
import Sidebar from '../Sidebar/sidebar';

function Dashboard(){

    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactionData, setTransactionData] = useState([]);
    const [expenseReport, setExpenseReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"month","type":"type"});
    const [incomeReport, setIncomeReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"month","type":"type"});

    const accessToken = localStorage.getItem("accessToken");
    const host=`http://${localStorage.getItem("serverAddress")}/api/v1`;
    const accountId = localStorage.getItem("customerAccountId");

    // console.log(accessToken);
    // console.log(host);
    // console.log(accountId);
    // app.use(cors());

    useEffect(() => {
          loadDashboardData();
      }, []);
    useEffect(() => {
        // console.log('balance value:', balance);
      }, [balance]);
    useEffect(() => {
        // console.log('expense value:', expense);
      }, [expense]);
    useEffect(() => {
        // console.log('income value:', income);
      }, [income]);
    useEffect(() => {
        // console.log('expenseReport value:', expenseReport);
      }, [expenseReport]);
    useEffect(() => {
        // console.log('incomeReport value:', incomeReport);
      }, [incomeReport]);
    useEffect(() => {
      // console.log("transactionData value:", transactionData);
    }, [transactionData]);

    const loadDashboardData = async() => {
      const json = `{"accountId":${accountId} }`;
      const obj = JSON.parse(json);

      const bal = await axios.post(`${host}/accounts/balance`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setBalance(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      const inc = await axios.post(`${host}/transactions/incomes`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setIncome(reponse.data);
      }).catch((err)=>{
        console.error(err);
        setIncome(err.response.data);
      });
      const exp = await axios.post(`${host}/transactions/expenses`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setExpense(reponse.data);
      }).catch((err)=>{
        console.error(err);
        setExpense(err.response.data);
      });
      const inchist = await axios.post(`${host}/analytics/sevendayincomes`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setIncomeReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      const exphist = await axios.post(`${host}/analytics/sevendayexpenses`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setExpenseReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      return await axios
        .post(`${host}/transactions/tentransactions`, obj, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setTransactionData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }


    return (
    <div>
         <HeaderLogout/>

    <div class="col main pt-3 mt-3">
          <h1 className="bankname">{localStorage.getItem("bankname")}</h1>
         <Row id="main_row">
            <Col lg={3}>
                <Sidebar />
            </Col >


            <Col lg={9}>
            <div id="features">
                <div class="row mb-3">
                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card bg-success text-white h-100 text-center" id="dashboard_cards">
                                    <div id="card_title" class="card-body bg-success" style={{backgroundColor:"#57b960"}}>

                                    <span class="text-uppercase " style={{color:"white",fontSize:"18px"}}><img style={{width:"50px",height:"auto",marginBottom:"15px",marginRight:"5px"}} alt="" src="cash.png"></img> Balance</span>
                                    <h6 style={{color:"white"}}>{balance.toFixed(2)}/-</h6>

                                    </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card text-white bg-warning h-100 text-center" id="dashboard_cards">
                            <div class="card-body bg-warning ">
                                 <span class="text-uppercase " style={{color:"white",fontSize:"18px"}}>
                                 <img style={{width:"50px",height:"auto",marginBottom:"15px",marginRight:"10px"}} alt="" src="business-and-finance.png">
                                 </img>Income</span>
                                 <h6  style={{color:"white"}}>{income}/-</h6>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card text-white bg-danger h-100 text-center" id="dashboard_cards">
                            <div class="card-body">
                                <span class="text-uppercase " style={{color:"white",fontSize:"18px"}}><img style={{width:"50px",height:"auto",marginBottom:"10px",marginRight:"5px"}} alt="" src="expense.png"></img>Expense</span>
                                <h6  style={{color:"white"}}>{expense}/-</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row mb-3">
                    <div class="col-lg-6 col-sm-6 py-2">
                      <h5 className="graph-head">Insights - Previous 10 Transactions</h5>
                      <Table bordered hover table-responsive>
                        <thead>
                          <tr>
                            <th>Transaction #</th>
                            <th>Sender/Recipient</th>
                            <th>Amount</th>
                            <th>Timestamp</th>
                          </tr>
                        </thead>
                        {transactionData.length === 0 ? (
                          <tbody>
                            <tr>
                              <td colSpan="4" className={"data_not_found"}>
                                No Data Found
                              </td>
                            </tr>
                          </tbody>
                        ) : (
                          <tbody>
                            {transactionData.map((transaction) => (
                              <tr>
                                <th>
                                  {transaction.account.account_id}
                                  {transaction.id}
                                </th>
                                <td>{transaction.transactionWith}</td>
                                <td
                                  className={
                                    transaction.amount < 0 ? "neg_money" : "pos_money"
                                  }
                                >
                                  {transaction.amount}
                                </td>
                                <td>{transaction.timestamp}</td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </Table>
                    </div>
                    <div className="col-lg-6">
                    <h5 className="graph-head">Expense for Previous 7 Days</h5>
                      <ResponsiveContainer width="95%" height={400}>
                          <BarChart width={600} height={300} data={expenseReport.daily}>
                              <XAxis dataKey="date">
                                <Label value="Previous 7 Dates" offset={0} position="insideBottom" />
                              </XAxis>
                              <YAxis label={{ value: 'Expense for the day', angle: -90, position: 'insideLeft' }} />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="amount" fill="#8884d8" />
                          </BarChart>
                      </ResponsiveContainer>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
    </div>
    </div>
    )
}

export default Dashboard
