import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import {signup} from '../../authService';


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
        signup(values, this.props.history)
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
      callback('¡La contraseña no coincide!');
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
      <div className='signup-envelop'>
        <div>
          <img src='/search.png' alt='logo'/>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <h1>Signup</h1>
            </div>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Por favor ingresa tu nombre!', whitespace: true }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='¿Cual es tu nombre?'/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '¡Ingresa un email valido!',
                }, {
                  required: true, message: 'Ingresa tu email!',
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
                  required: true, message: '¡Por favor ingresa tu contraseña!',
                },{
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Tu contraseña"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '¡Por favor, confirma tu contraseña!',
                },{
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="¡Confirma tu contraseña"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>He leido el <Link to='/agreement'>acuerdo</Link></Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Registrar
                </Button>
                Ya tienes una cuenta? <Link to='/login' >Inicia sesión</Link>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const Signup = Form.create()(SignupForm);

export default Signup;