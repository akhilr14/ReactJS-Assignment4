import { useState } from "react";
import { authenticate } from "../service";
import "./AuthForm.css";
export default function AuthForm({ onClose, onSuccess }) {
  const [data, setData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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
  function handleShowPassword() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Password: </label>
          <div className="col-sm-9">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <input type="checkbox" onChange={handleShowPassword} />
            <label className="col-sm-5 col-form-label">show password </label>
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
