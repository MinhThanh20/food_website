import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchAuth } from "../../redux/feature/products/api";
import { Link } from "react-router-dom";
import "../login/login.scss";
const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const payload = {
      username: account,
      password: password,
      navigate,
    };
    dispatch(fetchAuth(payload, dispatch));
  };
  return (
    <div className={"login-form-container active"}>
      <form onSubmit={handleLogin}>
        <h3>login form</h3>
        <input
          type="text"
          placeholder="enter your account"
          className="box"
          onChange={(event) => setAccount(event.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="remember">
          <input type="checkbox" name id="remember-me" />
          <label htmlFor="remember-me">remember me</label>
        </div>
        <input type="submit" defaultValue="login now" className="btn" />
        <p>
          forget password? <a href="#">click here</a>
        </p>
        <p>
          don't have an account? <Link to="/register">create one</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
