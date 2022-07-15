import React from "react";
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  AreaChartOutlined,
  UnorderedListOutlined,
  LineChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  ClusterOutlined,
  GoldOutlined
} from '@ant-design/icons';

const menulist = [
  {
    label: '首页', // 菜单标题名称
    key: '/admin/home', // 对应的path
    icon: <HomeOutlined/>, // 图标名称
    isPublic: true, // 公开的
  },
  {
    label: '商品',
    key: '/admin/products',
    icon: <ShoppingOutlined />,
    children: [ // 子菜单列表
      {
        label: '品类管理',
        key: '/admin/category',
        icon: <ClusterOutlined />
      },
      {
        label: '商品管理',
        key: '/admin/product',
        icon: <GoldOutlined />
      },
    ]
  },

  {
    label: '用户管理',
    key: '/admin/user',
    icon: <UserOutlined />
  },
  {
    label: '角色管理',
    key: '/admin/role',
    icon: <SafetyCertificateOutlined />,
  },

  {
    label: '图形图表',
    key: '/admin/charts',
    icon: <AreaChartOutlined />,
    children: [
      {
        label: '柱形图',
        key: '/admin/charts/bar',
        icon: <BarChartOutlined />
      },
      {
        label: '折线图',
        key: '/admin/charts/line',
        icon: <LineChartOutlined />
      },
      {
        label: '饼图',
        key: '/admin/charts/pie',
        icon: <PieChartOutlined />
      },
    ]
  },

  {
    label: '订单管理',
    key: '/admin/order',
    icon: <UnorderedListOutlined />,
  },
]

export default menulist
