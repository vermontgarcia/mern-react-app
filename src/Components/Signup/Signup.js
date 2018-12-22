import React, {Component} from 'react'
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';
import {Link} from 'react-router-dom';


import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

const FormItem = Form.Item;

class SignupForm extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('The password is not the same!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit}>
        <div>
          <h1>Signup</h1>
        </div>

        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='What is your name'/>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Please enter a valid email!',
            }, {
              required: true, message: 'Please enter your email!',
            }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='user@compareit.com'/>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please enter your Password!',
            },{
              validator: this.validateToNextPassword,
            }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Your password"/>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your Password!',
            },{
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm password"/>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <Link to='/agreement'>agreement</Link></Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
            Already have an account? <Link to='/login' >Log in</Link>
        </FormItem>

      </Form>
    )
  }
}

const Signup = Form.create()(SignupForm);

export default Signup;