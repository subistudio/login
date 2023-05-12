import React, { useRef, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";
import Home from "./components/Home/Home";

export const Context = React.createContext(null);



function App() {

  const [data, setData] = useState(JSON.parse(localStorage.getItem("login")));

  const navigate =  useNavigate();

  useEffect(()=> {

    if(data){
      navigate('home',{replace: true});
    }else{
      navigate('singup',{replace: true});
    }

  },[]);

  return (
    <Context.Provider value={data}>
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="singup" element={<SingUp/>}></Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;


