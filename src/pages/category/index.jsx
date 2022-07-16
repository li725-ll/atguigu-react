import React, {useEffect, useState} from "react";
import {Card, Button, Table, Modal} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import commodity from "../../api/commodity";
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

const AddClassificationModal = ({modalVisible, getModalVisible})=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setIsModalVisible(modalVisible);
  }, [isModalVisible, modalVisible]);

  const handleOk = () => {
    setIsModalVisible(false);
    getModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    getModalVisible(false);
  };

  return (
    <Modal title="添加分类" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

const OperationButton = (getModalVisible)=>(_, row) =>{
  const openAddClassificationModal = ()=>{
    getModalVisible(true);
    console.log(row);
  };

  return (
    <div className="operation-button">
      <Button type="primary" onClick={openAddClassificationModal}>修改分类</Button>
      <Button>查看子分类</Button>
    </div>
  );
}


const Category = ()=>{
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      render: OperationButton(getModalVisible),
      width: "300px"
    }
  ];

  function getModalVisible(val){
    setIsModalVisible(val);
  }

  useEffect(()=>{
    setLoading(true);
    commodity.getCategoryList()
      .then(res=>{
        const tmpData = [];
        for (const item of res.data) {
          tmpData.push({
            key: item._id,
            name: item.name
          })
        }
        setData(tmpData);
      })
      .catch()
      .finally(()=>{
        setLoading(false);
      })
  },[setLoading])
  return (
    <Card className="card" title={<Title />} extra={<Extra />}>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        loading={loading}
      />
      <AddClassificationModal getModalVisible={(val)=>setIsModalVisible(val)} modalVisible={isModalVisible}/>
    </Card>
  );
};

export default Category;
