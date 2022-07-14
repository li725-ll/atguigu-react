import React, {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import { Layout } from "antd";

const Header = ({getCollapsed}) =>{
  const [collapsed, setCollapsed ] = useState(true);
  const changeCollapsed = ()=>{
    setCollapsed(!collapsed);
    getCollapsed(collapsed);
  }
  return(
    <Layout.Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "white"
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: changeCollapsed,
      })}
    </Layout.Header>
  );
}
export default Header;
