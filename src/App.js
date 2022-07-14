import {Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import React from "react";
import "./App.less";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin"/>}/>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
