import React from "react";
import {Menu, Layout} from "antd";
import {useNavigate} from "react-router-dom";
import Trigger from "../Trigger";
import LogoHeader from "../LogoHeader";
import menulist from "./menulist";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const generateMenuItem = (menuList)=>{
  const menuItem = []
  for (const menu of menuList) {
    let Menu;
    if (menu.children){
      Menu = getItem(menu.label, menu.key, menu.icon, generateMenuItem(menu.children));
    }else {
      Menu = getItem(menu.label, menu.key, menu.icon);
    }
    menuItem.push(Menu)
  }

  return menuItem;
}

const Sider = ({ collapsed })=>{
  const navigate = useNavigate();

  const changeRoute = ({key})=>{
    navigate(key);
  }
  return (
    <Layout.Sider trigger={<Trigger />} collapsible collapsed={collapsed}>
      <LogoHeader className="logo" collapsed={collapsed}/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={generateMenuItem(menulist)}
        onClick={changeRoute}
      />
    </Layout.Sider>
  );
}

export default Sider;
