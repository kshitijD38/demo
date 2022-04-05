import React, { useEffect, useState } from "react";
import "./ListCallInfo.css";

function ListCallInfo(props) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(" req: ", requestOptions);
    fetch("https://192.168.1.7:9090/list/callInfo", requestOptions)
      .then((response) => response.json())
      .then((data) => setRecords(data));
  }, []);

  console.log(records);
  return (
    <div className="list-call-info">
      <div className="call-info-items">
        <div className="call-info-item">
          <h3>Full Name</h3>
        </div>
        <div className="call-info-item">
          <h3>Mobile Number</h3>
        </div>
        <div className="call-info-item">
          <h3>Email Id</h3>
        </div>
        <div className="call-info-item">
          <h3>Company Name</h3>
        </div>
        <div className="call-info-item">
          <h3>Product</h3>
        </div>
      </div>
      <div className="hr"></div>
      {records.map((curElement) => {
        const { id, fullName, mobileNumber, email, companyName, product } =
          curElement;
        return (
          <div className="call-info-items" key={id}>
            <div className="call-info-item">{fullName}</div>
            <div className="call-info-item">{mobileNumber}</div>
            <div className="call-info-item">{email}</div>
            <div className="call-info-item">{companyName}</div>
            <div className="call-info-item">{product}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListCallInfo;
