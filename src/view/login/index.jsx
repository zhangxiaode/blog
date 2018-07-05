import React, { Component } from 'react';
// import { browserHistory as Router } from 'react-router-dom'
import './login.less';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('success');
      } else {
        return false
      }
    });
  }
  forgetPwd = () => {
    this.props.history.push('/setPwd');
  }
  goRegister = () => {
    this.props.history.push('/register');
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="loginBg"></div>
        <div className="loginCont">
          <div className="logo"></div>
          <div className="tit">贴近自由 畅所欲言</div>
          <div className="loginForm">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名或手机号!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名或手机号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <a className="login-form-forgot" onClick={this.forgetPwd}>忘记密码</a>
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <Button type="primary" htmlType="button" onClick={this.goRegister} className="login-form-button">
                  注册
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;