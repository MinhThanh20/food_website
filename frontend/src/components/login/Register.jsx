import React from "react";
import { useState } from "react";
import { register } from "./apiRegister";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("làm ơn nhập đầy đủ thông tin");
    } else if (username.length < 6 || password.length < 6 || email.length < 6) {
      alert("username password and email của bạn phải lớn hơn 6 ký tự");
    } else {
      register({
        username: username,
        email: email,
        password: password,
      });
    }
  };
  return (
    <div>
      <div className="login-form-container active">
        <form onSubmit={handleRegister}>
          <h3>register form</h3>
          <input
            type="text"
            placeholder="enter your account"
            className="box"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="enter your email"
            className="box"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter your password"
            className="box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember"></div>
          <input type="submit" value="Register" className="btn" />
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
