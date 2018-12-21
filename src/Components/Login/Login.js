import React, {Component} from 'react';
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';
import {Link} from 'react-router-dom';

import {login} from '../../authService';

import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';

const FormItem = Form.Item;

class LoginForm extends Component {

  handleSubmit = (e) => {
    console.log('PROPS',this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Don't have an account yet? <Link to='/signup'>register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);

export default Login;
