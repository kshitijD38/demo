import React, { useState } from "react";
import "./CallInfo.css";

function CallInfo(props) {
  const [callInfo, setCallInfo] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    product: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value)

    setCallInfo({ ...callInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(callInfo),
    };
    console.log(" req: ", requestOptions);
    fetch("http://34.214.61.86:5004/add/call/info", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    setCallInfo({
      fullName: "",
      mobileNumber: "",
      email: "",
      companyName: "",
      product: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="rest">
          <div className="div-rest">
            <input
              type="text"
              autoComplete="off"
              value={callInfo.fullName}
              onChange={handleInput}
              name="fullName"
              id="fullname"
              placeholder="Full Name*"
            />
          </div>
          <div className="div-rest">
            <input
              type="text"
              autoComplete="off"
              value={callInfo.mobileNumber}
              onChange={handleInput}
              name="mobileNumber"
              id="mobilenumber"
              placeholder="Mobile Number*"
            />
          </div>
          <div className="div-rest">
            <input
              type="email"
              autoComplete="off"
              value={callInfo.email}
              onChange={handleInput}
              name="email"
              id="email"
              placeholder="Email Id*"
            />
          </div>
          <div className="div-rest">
            <input
              type="text"
              autoComplete="off"
              value={callInfo.companyName}
              onChange={handleInput}
              name="companyName"
              id="companyname"
              placeholder="Company Name"
            />
          </div>
        </div>
        <div className="productsubmit">
          <div className="product">
            <input
              className="product-input"
              type="text"
              autoComplete="off"
              value={callInfo.product}
              onChange={handleInput}
              name="product"
              id="product"
              placeholder="Prodct to be stored"
            />
          </div>
          <button className="product-button" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CallInfo;
