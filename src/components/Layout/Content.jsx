import React from "react";
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import Redirect from "../Redirect";
import Error from "../../pages/Error";
import Home from "../../pages/home";
import Category from "../../pages/category";

const Content = ()=>{
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: "0px",
        minHeight: 280,
      }}
    >
      <Routes>
        <Route path="/" element={<Redirect to="/admin/home" />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout.Content>
  );
}

export default Content;
