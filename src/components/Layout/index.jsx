import React, {useState} from "react";
import {Layout as AntLayout} from "antd";
import Sider from "./Sider";
import Header from "./Header";
import Content from "./Content"

const Layout = ()=>{
  const [collapsed, setCollapsed] = useState(false);
  const getCollapsed = (collapsed)=>{
    setCollapsed(collapsed);
  }

  return (
    <AntLayout className="ant-layout">
      <Sider collapsed={collapsed}/>
      <AntLayout className="site-layout">
        <Header getCollapsed={getCollapsed}/>
        <Content />
      </AntLayout>
    </AntLayout>
  )
}
export default Layout;
