import React from "react";
import {Layout} from "antd";
import Home from "../../pages/home";
import {Route, Routes} from "react-router-dom";
import Redirect from "../Redirect";
import Error from "../../pages/Error";

const Content = ()=>{
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <Routes>
        <Route path="/" element={<Redirect to="/admin/home" />} />
        <Route path="/home" element={ <Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout.Content>
  );
}

export default Content;
