import {Route, BrowserRouter, Routes} from "react-router-dom";
import React from "react";
import "./App.less";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
