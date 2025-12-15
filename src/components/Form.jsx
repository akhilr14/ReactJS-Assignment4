import { useState } from "react";
import "./style/Form.css";

function handleSubmit(e) {
  e.preventDefault();
  let data = `{"name": \"${name}\", "Email": \"${mail}\", "matter": \"${matter}\"}`;
  let jsonData = JSON.parse(data);
  console.log(jsonData);
  setSubmittedData(jsonData);
  setShow(true);
}

const Form = () => {
  return (
    <div className="form-container">
      <h2>Employee</h2>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="firstname">
            Firstname:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Firstname"
              name="firstname"
              id="firstname"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="lastname">
            Lastname:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Lastname"
              name="lastname"
              id="lastname"
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="DOB">
            DOB:
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              placeholder="Enter DOB"
              name="DOB"
              id="DOB"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              autoComplete="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="pwd">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
        </div>
        <div className="form-button-container">
          <button
            type="submit"
            className="btn btn-primary mr-sm-2"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button type="button" className="btn btn-outline-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
