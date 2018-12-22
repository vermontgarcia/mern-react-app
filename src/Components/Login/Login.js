import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {login} from '../../authService';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values, this.props.history)
      }
    });
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="form-envelop">
        <div>
          <h1>Login</h1>
        </div>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please type your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="user@compareit.com"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please type your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Your password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Link className="login-form-forgot" to='/forgot'>Forgot password</Link>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Don't have an account yet? <Link to='/signup'>Register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);

export default Login;
