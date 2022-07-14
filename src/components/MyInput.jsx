import React from "react";

const MyInput = ({ title }) => {
  return (
    <div>
      <div className="form">
        <div className="username-setion">
          <input type="text" name="name" required />
          <label for="name" className="label-name">
            <span class="content-name">{title}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyInput;
