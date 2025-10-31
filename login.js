// src/components/Login.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./Api";
import Navbar from "./Navbar";
import "./App.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = await loginUser(formData.email, formData.password);

    if (result.success) {
      setSuccess(" Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/"); // redirect to home 
      }, 1500);
    } else {
      setError(result.msg || " Invalid email or password");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Login</h2>

        {success && <div className="alert success">{success}</div>}
        {error && <div className="alert error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <p className="forgot">Forgot password?</p>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="bottom-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
