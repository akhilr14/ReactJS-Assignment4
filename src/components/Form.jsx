import { useState } from "react";
import "./style/Form.css";
import PopUp from "./TestPopUp";

const initialState = {
  employeeID: 0,
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  personalEmail: "",
  mobileNumber: "",
  postalAddress: "",
  gender: 0,
  country: "",
  city: "",
  designation: 0,
  basicPay: 0,
  needTransportation: false,
  notes: "",
  username: "",
  password: "",
};

const Form = () => {
  const [data, setData] = useState(initialState);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", data);
    setShow(true);
  };

  return (
    <>
      <PopUp show={show} handleClose={() => setShow(false)} data={data} />

      <div className="form-container">
        <h2>Employee Registration</h2>

        <form onSubmit={handleSubmit}>
          {/* Employee ID */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Employee ID: </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                name="employeeID"
                value={data.employeeID}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* First Name */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">First Name: </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name: </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">DOB: </label>
            <div className="col-sm-9">
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={data.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Personal Email */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Email: </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                name="personalEmail"
                value={data.personalEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Mobile Number: </label>
            <div className="col-sm-9">
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                value={data.mobileNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Postal Address */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Address: </label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                name="postalAddress"
                value={data.postalAddress}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Gender: </label>
            <div className="col-sm-9">
              <select
                className="form-control"
                name="gender"
                value={data.gender}
                onChange={handleChange}
              >
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Other</option>
              </select>
            </div>
          </div>

          {/* Country */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Country: </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="country"
                value={data.country}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* City */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">City: </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Designation */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Designation: </label>
            <div className="col-sm-9">
              <select
                className="form-control"
                name="designation"
                value={data.designation}
                onChange={handleChange}
              >
                <option value={0}>Intern</option>
                <option value={1}>Developer</option>
                <option value={2}>Manager</option>
                <option value={3}>HR</option>
              </select>
            </div>
          </div>

          {/* Basic Pay */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Basic Pay: </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                name="basicPay"
                value={data.basicPay}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Transportation */}
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">
              Need Transportation:
            </label>
            <div className="col-sm-3">
              <input
                type="checkbox"
                name="needTransportation"
                checked={data.needTransportation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Notes */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Notes: </label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                name="notes"
                value={data.notes}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Username */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Username: </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="username"
                value={data.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password: </label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-button-container">
            <button type="submit" className="btn btn-primary mr-sm-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => setData(initialState)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
