import React, {useEffect, useState} from "react";
import {Card, Button, Table, Modal, Form, Input, Select, message} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import commodity from "../../api/commodity";
import "./index.less"

// 卡片标题
const Title = ()=>{
  return(
    <span>一级分类列表</span>
  );
}

// 添加商品分类按钮
const Extra = ({getModalVisible})=>{
  const openAddClassificationModal = ()=>{
    getModalVisible(true);
  };
  return (
    <Button
      type="primary"
      onClick={openAddClassificationModal}
      icon={<PlusOutlined
      />
    }>
      添加
    </Button>
  );
}

// 添加商品对话框
const AddClassificationModal = ({modalVisible, getModalVisible, modalTitle, classificationOptions})=>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [data, setData] = useState({parentId: "", categoryName: ""});

  useEffect(() => {
    setIsModalVisible(modalVisible);
  }, [isModalVisible, modalVisible]);

  const handleOk = (type) => {
    setIsModalVisible(false);
    getModalVisible(false);
    if (type){
      setBtnLoading(true);
      commodity.addCommodityCategory(data)
        .then(()=>{
          message.success("添加成功！");
        })
        .catch(err=>{
          message.error(err)
          console.error(err);
        })
        .finally(()=>{
          setBtnLoading(false)
        })
    }else {

    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    getModalVisible(false);
  };

  const onSelectChange = (val)=>{
    data.parentId = val;
    setData(data);
  };

  const onInputChange = (e)=>{
    data.categoryName = e.target.value
    setData(data);
  }
  if (modalTitle ==="更新分类"){
    return (
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onOk={() => handleOk(true)}
        onCancel={handleCancel}
        confirmLoading={btnLoading}
        cancelText="关闭"
        okText="确定"
      />
    );
  }else {
    return (
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={btnLoading}
        cancelText="关闭"
        okText="确定"
      >
        <Form>
          <Form.Item
            label="分类等级"
            name="parentId"
            rules={[{ required: true, message: '请选择分类等级！' }]}
          >
            <Select
              placeholder="请选择分类等级"
              onChange={onSelectChange}
              allowClear
            >
              {classificationOptions.map((item)=><Select.Option key={item.key} value={item._id}>{item.name}</Select.Option>)}
            </Select>
          </Form.Item>

          <Form.Item
            label="分类名称"
            name="categoryName"
            rules={[{ required: true, message: '请输入分类名称!' }]}
          >
            <Input placeholder="请输入分类名称" onChange={onInputChange}/>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

// 表格操作按钮
const OperationButton = (getModalVisible)=>(_, row) =>{
  const openAddClassificationModal = ()=>{
    getModalVisible(true);
  };

  return (
    <div className="operation-button">
      <Button type="primary" onClick={openAddClassificationModal}>修改分类</Button>
      <Button>查看子分类</Button>
    </div>
  );
}

// 商品分类
const Category = ()=>{
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ modalTitle, setModalTitle] = useState("");

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
      render: OperationButton((val)=>getModalVisible(val, "更新分类")),
      width: "300px"
    }
  ];

  function getModalVisible(val, modalTitle=""){
    setIsModalVisible(val);
    setModalTitle(modalTitle);
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
  },[setLoading]);

  return (
    <Card
      className="card"
      title={<Title />}
      extra={<Extra getModalVisible={(val)=>getModalVisible(val,"添加分类")}/>}>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        loading={loading}
      />
      <AddClassificationModal
        modalTitle={modalTitle}
        getModalVisible={(val)=>getModalVisible(val)}
        modalVisible={isModalVisible}
        classificationOptions={[{name: "一级分类", key: "0"},...data]}
      />
    </Card>
  );
};

export default Category;
