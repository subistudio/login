import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SingUp.sass";
export default function SingUp() {
  const [singData, setSingData] = useState({});
  const [netSteep, setNextSteep] = useState(false);

  const submitRef = useRef(null);
  const dateRef = useRef(null);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const {
      sing_login,
      sing_password,
      sing_email,
      sing_name,
      sing_phone,
    } = e.target.elements;
    setSingData({
      login: sing_login.value,
      password: sing_password.value,
      email: sing_email.value,
      name: sing_name.value,
      phone: sing_phone.value,
    });

    submitRef.current.disabled = true;
    setTimeout(()=> setNextSteep(true),1000);

} ;

  const close = () => {

    if (dateRef.current.value && Math.floor((new Date() - new Date(dateRef.current.value)) / (1000 * 60 * 60 * 24 * 365)) >= 18){
        setNextSteep(false);
        localStorage.setItem('login',JSON.stringify({...singData,brithday: dateRef.current.value}));
        navigate("/home",{replace: true});
    }else {
       alert('you must be 18 years or older');
    }

  };

  return (
    <div className="singup-container">
      {/* singUp  */}
      <div className="singup">
        <h1>SingUp</h1>
        <form onSubmit={submit}>
          <div>
            <input
              type={"text"}
              id="sing_login"
              pattern="^[A-Za-z]{1}[A-Za-z0-9]{5,30}$"
              placeholder="Your login"
              required
            />
            <label htmlFor="sing_login">Login</label>
          </div>
          <div>
            <input
              type={"password"}
              id="sing_password"
              pattern="^[A-Za-z0-9]{6,30}$"
              placeholder="Your password"
              required
            />
            <label htmlFor="sing_password">Password</label>
          </div>
          <div>
            <input
              type={"email"}
              id="sing_email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="sing_email">Email</label>
          </div>
          <div>
            <input
              type={"text"}
              id="sing_name"
              pattern="^[A-Za-z]{2,30}$"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="sing_name">Name</label>
          </div>
          <div>
            <input
              type={"tel"}
              id="sing_phone"
              defaultValue={"+998"}
              pattern="^\+998[0-9]{9}"
              placeholder="Enter your phone number"
              required
            />
            <label htmlFor="sing_phone">Number</label>
          </div>
          <p>do you have an acoount?  
            <NavLink to={"/login"} replace={true}> login
            </NavLink>
          </p>
          <button type="submit" ref={submitRef}>SingUp</button>
        </form>
      </div>
      {netSteep ? (
        <div className="brithday-container">
          <div className="brithday">
            <h3>Select your birthday please?</h3>
            <input type={"date"} ref={dateRef} />
            <button onClick={close}>OK</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
