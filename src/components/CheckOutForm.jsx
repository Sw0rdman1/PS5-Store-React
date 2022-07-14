import React from "react";
import { useState } from "react";
import MyInput from "./MyInput";

const CheckOutForm = ({ resetForm }) => {
  return (
    <div>
      <h1>Please fill the form: </h1>
      <MyInput title="First name"></MyInput>

      <MyInput title="Last name"></MyInput>

      <MyInput title="Email"></MyInput>

      <MyInput title="Phone number"></MyInput>

      <button className="order-btn" onClick={() => resetForm()}>
        Order
      </button>
    </div>
  );
};

export default CheckOutForm;
