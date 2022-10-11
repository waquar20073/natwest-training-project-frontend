import React, { Component } from 'react';
import "./ReportComponent.css";
import { BarChart, Bar, XAxis, YAxis,Legend,Tooltip,Pie,PieChart,ResponsiveContainer} from 'recharts';
import HeaderLogout from '../header1/headerLogout';
function ReportComponent(){
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]

      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];


        return (
          
            <div className='reports'>
                <HeaderLogout/>
                <div className='container'>
                <br></br>
                <div className='row'>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={600} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={600} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>



                <hr></hr>
                <div className='row'>
                    <div className='col-lg-6'>
                       <ResponsiveContainer width="95%" height={400}>
                        <PieChart width={600} height={300}>
                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='col-lg-6'>
                    <ResponsiveContainer width="95%" height={400}>
                        <PieChart width={600} height={300}>
                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                    </ResponsiveContainer>
                    </div>
                </div>
            </div>
          </div>
        );
    }


export default ReportComponent;