import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './login.less'
import user from '../../api/user'
import { setLocalStorage } from "../../utils/storage";

const Login = (props)=>{
  const navigate = useNavigate();

  const onFinish = (values) => {
    user.login(values)
    .then(res=>{
      setLocalStorage("USER", res);
      navigate('/home', { replace: true });
      message.success("登陆成功！");
    }).catch(err=>{
      message.error(err.msg)
    })
  };
  // 对用户名进行验证
  const validateUserN = [
    {required: true, message: '请输入你的用户名！'},
    { min: 4, message: '用户名至少4位！' },
    { max: 12, message: '用户名最多12位！' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成！' },
  ]

  //对密码进行自定义验证
  const validatePwd = (rule, value, callback) => {
    if(!value) {
      callback('请输入你的密码！');
    } else if (value.length<4) {
      callback('密码长度不能小于4位！');
    } else if (value.length>12) {
      callback('密码长度不能大于12位！');
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成！');
    } else {
      callback(); // 验证通过
    }
  }

  return (
    <div className="login">
      <header>
        <img src={logo} alt="logo"/>
        <h1>React项目: 后台管理系统</h1>
      </header>
      <section>
        <h2>用户登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={validateUserN}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {validator: validatePwd}
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 陆
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}

export default Login;
