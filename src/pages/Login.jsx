import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

 const navigate = useNavigate();

  const handleLogin = () => {
    // simulate successful login
    localStorage.setItem("auth", true);
    navigate("/dashboard");
  };


  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-secondary">
      {/* Title */}
      <h2 className="mb-4 text-center">
        <span className="text-warning fw-bold">MICRO</span>
        <span className="text-dark fw-bold">-FINANCE</span>
      </h2>

      {/* Login Card */}
      <div className="card shadow-none p-4 w-100" style={{ maxWidth: "350px" }}>
        <h6 className="text-center text-secondary mb-4"></h6>
        <form>
          {/* User Name */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-person text-primary"></i>
              </span>
              <input
                type="name"
                className="form-control"
                placeholder="User Name"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-primary"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
             <button className="btn btn-warning" onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}