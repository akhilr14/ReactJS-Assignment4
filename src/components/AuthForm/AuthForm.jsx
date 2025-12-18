import { useState } from "react";
import { authenticate } from "../service";
import "./AuthForm.css";
export default function AuthForm({ onClose, onSuccess }) {
  const [data, setData] = useState({ username: "", password: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const token = await authenticate(data);
    if (token) {
      onSuccess(token);
    } else {
      alert("Invalid credentials");
    }
    onClose();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="username">
            Username:{" "}
          </label>
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
        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="password">
            Password:{" "}
          </label>
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
        <div className="form-button-container">
          <button type="submit" className="btn btn-primary mr-sm-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
