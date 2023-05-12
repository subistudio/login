import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.sass";

export default function Login() {
  const submit = (e) => {
    const {login,password} = e.target.elements;
    
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <div>
            <input type={"text"} id="login" placeholder="Enter your login" />
            <label htmlFor="login">Login</label>
          </div>
          <div>
            <input
              type={"password"}
              id="password"
              placeholder="Enter your password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <p>
            don't you have an acoount?
            <NavLink to={"/singup"} replace={true}>
              singup
            </NavLink>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
