import React, {Component} from 'react';
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';
import {Link} from 'react-router-dom';

class Login extends Component {
  //constructor(){
  //  super();
  //  this.state = {
  //  }
  //}

  componentWillMount (){
    console.log("login", this.props)
  }

  render(){
    //console.log(this.props);
    return (
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div className='form-envelop'>
          <form onSubmit={this.props.handleLogin}>
            <div className='fields-envelop'>
              <InputField className='input' title='Email:' type='email' name='email' placeholder='user@copareit.com' handleChange={this.props.handleChange} autofocus='autofocus' />
              <InputField className='input' title='Password:' type='password' name='password' placeholder='Your password' handleChange={this.props.handleChange} />
            </div>
            <div className='button-envelop'>
              <FormButton className='form-button button' type='submit' name='Log in' />
            </div>
          </form>
        </div>
        <div>
          <p>Don't have an account yet? <span><Link to='/signup' >Register</Link></span></p>
        </div>
      </div>
    )
  }
}

export default Login;
