import React from "react";
import Redirect from "../../components/Redirect";
import {getLocalStorage} from "../../utils/storage";
import Layout from "../../components/Layout"
import "./index.less";

const Admin = () =>{
  if (!getLocalStorage("USER")){
    return <Redirect to="/login" />
  }

  return <Layout />;
}

export default Admin;
