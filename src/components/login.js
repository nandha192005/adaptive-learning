import React from 'react';
import './login.css'; // Import the separate CSS file


const Login = () => {
  return (
    <div className="login">
    <div class="wrapper">
    <div class="title"><span>Login Form</span></div>
    <form action="#">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      <div class="pass"><a href="#">Forgot password?</a></div>
      <div class="row button">
        <input type="submit" value="Login" />
      </div>
      <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
    </form>
  </div>
  </div>
  );
}

export default Login;
