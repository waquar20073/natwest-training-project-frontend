import React, { Component, useState, useEffect, useCallback } from 'react';
import "./ReportComponent.css";
import { BarChart, Bar, XAxis, YAxis,Legend,Tooltip,Pie,PieChart,ResponsiveContainer, Label, Sector} from 'recharts';
import HeaderLogout from '../header1/headerLogout';
import axios from "axios";


const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.partnerName}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function ReportComponent(){
    const [expenseReport, setExpenseReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"month","type":"type"});
    const [incomeReport, setIncomeReport] = useState({"daily":[{
          "date": "Page A",
          "amount": 4000
        }],"month":"month","type":"type"});
    const [expensePartnerReport, setExpensePartnerReport] = useState({"data":[{
          "partnerName": "Page A",
          "frequency": 10
        }],"month":"month","type":"type"});
    const [incomePartnerReport, setIncomePartnerReport] = useState({"data":[{
          "partnerName": "Page A",
          "frequency": 20
        }],"month":"month","type":"type"});
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );

    // const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiZXhwIjoxNjY1ODQxNjI0LCJpYXQiOjE2NjU3NTUyMjR9.5blSGI3h3vNYVoHU_wXUHqeWUG7irDqJY4vORCJUo3ogSmv5cpR-7DckextYgUjgozmDTEJ3hBkNHyUdgzi3lg";
    // const host="http://localhost:5051/api/v1"
    // const accountId = 3;
    const accessToken = localStorage.getItem("accessToken");
    const host=`http://${localStorage.getItem("serverAddress")}/api/v1`;
    const accountId = localStorage.getItem("customerAccountId");

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
        setIncomePartnerReport(reponse.data);
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
                <div className='container'>
                <br></br>
                <div className='row'>
                  <div className='col-lg-12'>
                  <h3 className='month-title'>{expenseReport.month}</h3>
                  </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={600} height={300} data={incomeReport.daily}>
                            <XAxis dataKey="date">
                              <Label value="Dates of current Month" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'Expense for the day', angle: -90, position: 'insideLeft' }} />
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
                            <XAxis dataKey="date">
                              <Label value="Dates of current Month" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'Expense for the day', angle: -90, position: 'insideLeft' }} />
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
                       <PieChart width={400} height={400}>
                         <Pie
                           activeIndex={activeIndex}
                           activeShape={renderActiveShape}
                           data={incomePartnerReport.data}
                           cx={200}
                           cy={200}
                           innerRadius={60}
                           outerRadius={80}
                           fill="#82ca9d"
                           dataKey="frequency"
                           onMouseEnter={onPieEnter}
                         />
                       </PieChart>
                        </ResponsiveContainer>
                        <h5 className="chart-title">Most Frequent Trading Partners for Incomes</h5>
                    </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={expensePartnerReport.data}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="frequency"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                     </ResponsiveContainer>
                    <h5 className="chart-title">Most Frequent Trading Partners for Expense</h5>
                    </div>
                </div>
            </div>
          </div>
        );
    }


export default ReportComponent;
