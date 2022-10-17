import React, { Component, useState, useEffect } from 'react';
import "./ReportComponent.css";
import { BarChart, Bar, XAxis, YAxis,Legend,Tooltip,Pie,PieChart,ResponsiveContainer} from 'recharts';
import HeaderLogout from '../header1/headerLogout';
import axios from "axios";
import Sidebar from '../Sidebar/sidebar';

function ReportComponent(){
    const [expenseReport, setExpenseReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"Month","type":"type"});
    const [incomeReport, setIncomeReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"Month","type":"type"});
    const [expensePartnerReport, setExpensePartnerReport] = useState({"data":[{
          "partnerName": "Page A",
          "frequency": 10
        }],"month":"Month","type":"type"});
    const [incomePartnerReport, setIncomePartnerReport] = useState({"data":[{
          "partnerName": "Page A",
          "frequency": 20
        }],"month":"Month","type":"type"});

    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiZXhwIjoxNjY1ODQxNjI0LCJpYXQiOjE2NjU3NTUyMjR9.5blSGI3h3vNYVoHU_wXUHqeWUG7irDqJY4vORCJUo3ogSmv5cpR-7DckextYgUjgozmDTEJ3hBkNHyUdgzi3lg";
    const host="http://localhost:5051/api/v1"
    const accountId = 3;

    // app.use(cors());

    useEffect(() => {
          loadAnalyticsData();
      }, []);
    useEffect(() => {
        // console.log('expenseReport value:', expenseReport);
      }, [expenseReport]);
    useEffect(() => {
        // console.log('incomeReport value:', incomeReport);
      }, [incomeReport]);
    useEffect(() => {
        // console.log('expensePartnerReport value:', expensePartnerReport);
      }, [expensePartnerReport]);
    useEffect(() => {
        console.log('incomePartnerReport value:', incomePartnerReport);
      }, [incomePartnerReport]);

    const loadAnalyticsData = async() => {
      const json = `{"accountId":${accountId} }`;
      const obj = JSON.parse(json);
      const inc = await axios.post(`${host}/analytics/incomes`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setIncomeReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      const exp = await axios.post(`${host}/analytics/expenses`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setExpenseReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      const inPar = await axios.post(`${host}/analytics/incomepartners`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setExpensePartnerReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
      const expPar = await axios.post(`${host}/analytics/expensepartners`, obj, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then((reponse)=> {
        setExpensePartnerReport(reponse.data);
      }).catch((err)=>{
        console.error(err);
      });
    }


        return (

            <div className='reports'>
                <HeaderLogout/>
                
                <br></br>

                <div className='row'>
                  <div className='col-lg-3'>
                      <br></br>
                      <br></br>
                      <br></br>
                      <Sidebar/>
                  </div>
                  <div className = 'col-lg-9'>
                  <div className='row'>
                  <div className='col-lg-12'>
                  <h3 className='month-title'>{expenseReport.month}</h3>
                  </div>
                    
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={600} height={300} data={incomeReport.daily}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                    <h5 className="chart-title">Daily Income for the Month</h5>
                    </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={600} height={300} data={expenseReport.daily}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#8884d8" />
                        </BarChart>
                        </ResponsiveContainer>
                      <h5 className="chart-title">Daily Expenses for the Month</h5>
                    </div>
                </div>



                <hr></hr>
                <div className='row'>
                    <div className='col-lg-6'>
                       <ResponsiveContainer width="95%" height={400}>
                        <PieChart width={600} height={300}>
                            <Pie data={incomePartnerReport.data} dataKey="frequency" nameKey="partnerName" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        </ResponsiveContainer>
                        <h5 className="chart-title">Most Frequent Trading Partners for Incomes</h5>
                    </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <PieChart width={600} height={300}>
                            <Pie data={expensePartnerReport.data} dataKey="frequency" nameKey="partnerName" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" label />
                        </PieChart>
                    </ResponsiveContainer>
                    <h5 className="chart-title">Most Frequent Trading Partners for Expense</h5>
                    </div>
                </div>

                  </div>
                </div>
                
            </div>
          
        );
    }


export default ReportComponent;
