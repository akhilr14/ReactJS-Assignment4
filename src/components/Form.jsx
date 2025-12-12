import { useState } from "react";
import "./style/Form.css";

const Form = () => {
  return (
    <div>
      <div className="form-container">
        <h2>Employee</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary mr-sm-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
