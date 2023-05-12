import React, { useEffect, useState, useRef } from "react";
import { Context } from "../../App";
import { useContext } from "react";

import "./Home.sass";
import { useBeforeUnload, useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState(useContext(Context));
  const profileView = useRef();

  const showProlie = () => {
    if (profileView.current.hasAttribute("style")) {
      profileView.current.removeAttribute("style");
    } else {
      profileView.current.style.display = "block";
    }
  };

  const logout = () => {
    profileView.current.removeAttribute("style");
    localStorage.removeItem("login");
    navigate("/singup", { replace: true });
  };

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          Promise.reject("qayerdadur muammo bor!!");
        }
      })
      .then(setData)
      .catch((err) => setError({ err: true, message: err }));
  }, []);

  return (
    <>
      <header>
        <button onClick={logout}>Logout</button>
        <button onClick={showProlie}>Profile</button>
        <div className="profileView" ref={profileView}>
          <p>
            <strong>Login: </strong> {user?.login}
          </p>
          <p>
            <strong>Email: </strong> {user?.email}
          </p>
          <p>
            <strong>Name: </strong> {user?.name}
          </p>
          <p>
            <strong>phone: </strong> {user?.phone}
          </p>
          <p>
            <strong>birthday: </strong> {user?.brithday}
          </p>
        </div>
      </header>
      <main>
        {error.err ? (
          <h1>{error.message}</h1>
        ) : data ? (
          <div className="image-container">
            <img src={data.message}/>
          </div>
        ) : null}
      </main>
    </>
  );
}
