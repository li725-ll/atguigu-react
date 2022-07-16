import React from "react";
import {Card, Button, Table} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import "./index.less";

const Title = ()=>{
  return(
    <span>一级分类列表</span>
  );
}

const Extra = ()=>{
  return (
    <Button type="primary" icon={<PlusOutlined />}>
      添加
    </Button>
  );
}

const columns = [
  {
    title: '分类的名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '操作',
    dataIndex: 'age',
    key: 'age',
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32
  }
];

const Category = ()=>{
  return (
    <Card className="card" title={<Title />} extra={<Extra />}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default Category;
