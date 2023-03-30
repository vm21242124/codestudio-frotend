import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Loginpage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Editor from "./Pages/Editor/Editor";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route exact path='/editor' element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
