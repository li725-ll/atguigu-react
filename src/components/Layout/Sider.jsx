import Trigger from "../Trigger";
import LogoHeader from "../LogoHeader";
import {Menu, Layout} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import React from "react";


const Sider = ({ collapsed })=>{

  return (
    <Layout.Sider trigger={<Trigger />} collapsible collapsed={collapsed} className="">
      <LogoHeader className="logo" collapsed={collapsed}/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Layout.Sider>
  );
}

export default Sider;
