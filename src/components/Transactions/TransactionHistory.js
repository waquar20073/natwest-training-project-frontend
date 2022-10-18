import React, { useState, useEffect } from "react";
import "./TransactionHistory.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";

function TransactionHistory() {
  const [transactionData, setTransactionData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [sortByAmountOrderDesc, setSortByAmountOrderDesc] = useState(false);
  const [sortByTimesOrderDesc, setSortByTimeOrderDesc] = useState(false);

  useEffect(() => {
    loadTransactionHistory();
    console.log("Transaction history loaded")
  }, []);

  useEffect(() => {
    console.log("transactionData value:", transactionData);
  }, [transactionData]);
  useEffect(() => {
    console.log("searchValue value:", searchValue);
  }, [searchValue]);
  useEffect(() => {
    console.log("fromDate value:", fromDate);
  }, [fromDate]);
  useEffect(() => {
    console.log("toDate value:", toDate);
  }, [toDate]);
  useEffect(() => {
    console.log("sortBy value:", sortBy);
  }, [sortBy]);
  useEffect(() => {
    console.log("filterBy value:", filterBy);
  }, [filterBy]);
  useEffect(() => {
    console.log("sortByAmountOrderDesc value:", sortByAmountOrderDesc);
  }, [sortByAmountOrderDesc],[]);
  useEffect(() => {
    console.log("sortByTimesOrderDesc value:", sortByTimesOrderDesc);
  }, [sortByTimesOrderDesc],[]);

  // const host = "http://localhost:5051";
  // const accessToken =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiZXhwIjoxNjY1ODQxNjI0LCJpYXQiOjE2NjU3NTUyMjR9.5blSGI3h3vNYVoHU_wXUHqeWUG7irDqJY4vORCJUo3ogSmv5cpR-7DckextYgUjgozmDTEJ3hBkNHyUdgzi3lg";
  // const accountId = 3;
  const accessToken = localStorage.getItem("accessToken");
  const host=`http://${localStorage.getItem("serverAddress")}`;
  const accountId = localStorage.getItem("customerAccountId");

  const loadTransactionHistory = async () => {
    const json = `{
      "accountId":${accountId}
    }`;
    const obj = JSON.parse(json);
    return await axios
      .post(`${host}/api/v1/transactions`, obj, {
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
    // const url = `${host}/api/v1/transactions`;
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body : JSON.stringify({
    //      "accountId":accountId
    //   })
    // }
    // await fetch(url,requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("test");
    //     console.log(data);
    //   }).catch((error) => {
    //     console.err(error);
    //   })
  };

  const handleSearch = async (e) => {
    /* currently passing just a single argument for query 'q',
        when using spring boot, need to pass a single argument for each of the parameters i.e,
        1) transaction_with
        2) amount
        3) transaction type
      */
    // e.preventDefault();

    const json = `{
      "accountId": ${accountId},
    	"from": "${fromDate}",
    	"to": "${toDate}",
    	"search": "${searchValue}",
    	"sortBy": "${sortBy}"
    }`;
    const obj = JSON.parse(json);
    const inc = await axios
      .post(`${host}/api/v1/transactions/transactionfilter`, obj, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTransactionData(response.data);
        setSearchValue("");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const sortByAmount = async(e) =>{
    console.log("Sort By Amount Triggered");
    setSortByAmountOrderDesc((val) => !val);
    if(sortByAmountOrderDesc){
      // sort decreasing order by amount
      setSortBy("amount desc");
    }else{
      // sort increasing order by amount
      setSortBy("amount");
    }
    await handleSearch();
  }
  const sortByTime = async(e) =>{
    console.log("Sort By Amount Triggered");
    setSortByAmountOrderDesc((val) => !val);
    if(sortByAmountOrderDesc){
      // sort decreasing order by amount
      setSortBy("timestamp desc");
    }else{
      // sort increasing order by amount
      setSortBy("timestamp");
    }
    await handleSearch();
  }
  const handleReset = (e) => {
    setFromDate((val) => "");
    setToDate((val) => "");
    setSearchValue("");
    setSortBy("");
    setFilterBy("");
    loadTransactionHistory();
  };
  const handleFilter = (value) => {
    let filteredTransactions = [];
    transactionData.forEach((trans) => {
      if (trans.type == value) {
        console.log("type",trans.type);
        filteredTransactions.push(trans);
      }
    });
    setTransactionData(filteredTransactions);
  };
  const handleFilterFromDate = async (date) => {
    setFromDate(date);
    // const json = `{
    //   "accountId": ${accountId},
    // 	"from": "${fromDate}",
    // 	"to": "${toDate}",
    // 	"search": "${searchValue}",
    // 	"sortBy": "${sortBy}"
    // }`;
    // const obj = JSON.parse(json);
    // const inc = await axios
    //   .post(`${host}/api/v1/transactions/transactionfilter`, obj, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     setTransactionData(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  const handleFilterToDate = async (date) => {
    setToDate(date);
    // const json = `{
    //   "accountId": ${accountId},
    // 	"from": "${fromDate}",
    // 	"to": "${toDate}",
    // 	"search": "${searchValue}",
    // 	"sortBy": "${sortBy}"
    // }`;
    // const obj = JSON.parse(json);
    // const inc = await axios
    //   .post(`${host}/api/v1/transactions/transactionfilter`, obj, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     setTransactionData(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  const handleSortBy = async (sortBy) => {
    // Implement sort logic locally in frontend
    setSortBy(sortBy);
    // const json = `{
    //   "accountId": ${accountId},
    // 	"from": "${fromDate}",
    // 	"to": "${toDate}",
    // 	"search": "${searchValue}",
    // 	"sortBy": "${sortBy}"
    // }`;
    // const obj = JSON.parse(json);
    // const inc = await axios
    //   .post(`${host}/api/v1/transactions/transactionfilter`, obj, {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     setTransactionData(response.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <div class="col main pt-1 mt-1">
      <Row id="transaction_row">
        <Col lg={3}>
          <div id="sidebar2">
            <div
              class="sidebar-offcanvas"
              role="navigation"
              style={{ backgroundColor: "#e9ecef" }}
            >
              <ul class="nav flex-column sticky-top pl-0 pt-4 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3">
                  <a class="nav-link text-dark" href="#">
                    <h5>Features</h5>
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a class="nav-link text-secondary" href="#">
                    <span className="ml-3">
                      <img
                        src="profile.png"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "8px",
                          marginBottom: "5px",
                        }}
                      ></img>
                      My Profile
                    </span>
                  </a>
                </li>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#">
                      <span className="ml-3">Choose Bank</span>
                    </a>
                  </li>
                </Link>
                <li class="nav-item mb-2">
                  <a class="nav-link text-secondary" href="#">
                    <span className="ml-3">Reports</span>
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a class="nav-link text-secondary" href="#">
                    <span className="ml-3">Bank Statements</span>
                  </a>
                </li>
                <Link to="/transfer" style={{ textDecoration: "none" }}>
                  <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#">
                      <span className="ml-3">Transfer Money</span>
                    </a>
                  </li>
                </Link>
                <Link to="/transactions" style={{ textDecoration: "none" }}>
                  <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#">
                      <span className="ml-3">Transaction History</span>
                    </a>
                  </li>
                </Link>
                <br></br>
                <br></br>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#">
                      <span className="ml-3">
                        <img
                          src="logout.png"
                          style={{
                            width: "18px",
                            height: "18px",
                            marginRight: "8px",
                            marginBottom: "3px",
                          }}
                        ></img>
                        Logout
                      </span>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={9}>
          <h2 id="transaction_title">Transaction History </h2>
          <div className="transaction_table">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div class="form-group">
                    <label style={{ marginLeft: "5px" }}>Search</label>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Enter search text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div class="form-group">
                    <label style={{ marginLeft: "5px" }}>From</label>
                    <input
                      id="id_date_from"
                      type="date"
                      class="form-control"
                      placeholder="From"
                      value={fromDate}
                      onChange={(e) => handleFilterFromDate(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="form-group">
                    <label style={{ marginLeft: "5px" }}>To</label>
                    <input
                      id="id_date_to"
                      type="date"
                      class="form-control"
                      placeholder="From"
                      value={toDate}
                      onChange={(e) => handleFilterToDate(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <button className="btn btn-primary button" type="submit">
                      Search
                    </button>
                    {/* Replace Search button with icon of search */}
                    <button
                      className="btn btn-warning button"
                      onClick={(e) => handleReset(e)}
                    >
                      Reset
                    </button>
                  </div>
                </div>

              </div>
            </form>
            <div className="col-lg-6">
              <div className="form-group">
                <div><h7>Filter by Type</h7></div>
                <button
                  className="btn btn-success button"
                  onClick={(e) => handleFilter("credit")}
                >
                  Credit
                </button>
                <button
                  className="btn btn-danger button"
                  onClick={(e) => handleFilter("debit")}
                >
                  Debit
                </button>
              </div>
            </div>
            <br></br>
            <Table bordered hover table-responsive>
              <thead>
                <tr>
                  <th>Transaction # </th>
                  <th className="table-header">Amount <i class="fa fa-fw fa-sort" onClick={(e)=>sortByAmount(e)}></i></th>
                  <th>Sender/Recipient</th>
                  <th className="table-header">Timestamp <i class="fa fa-fw fa-sort" onClick={(e)=>sortByTime(e)}></i></th>
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
                      <td
                        className={
                          transaction.amount < 0 ? "neg_money" : "pos_money"
                        }
                      >
                        {transaction.amount}
                      </td>
                      <td>{transaction.transactionWith}</td>

                      <td>{new Date(transaction.timestamp).toLocaleString("en-US")}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(TransactionHistory);
