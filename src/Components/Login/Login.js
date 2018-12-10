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

  }

  render(){
    //console.log(this.props);
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.props.handleLogin}>
          <InputField title='Email:' type='email' name='email' placeholder='user@copareit.com' handleChange={this.props.handleChange} autofocus='autofocus' />
          <InputField title='Password:' type='password' name='password' placeholder='Your password' handleChange={this.props.handleChange} />
          <FormButton className='form-button button' type='submit' name='Log in' />
        </form>
        <div>
          <p>Don't have an account yet? <span><Link to='/signup' >Register</Link></span></p>
        </div>
      </div>
    )
  }
}

export default Login;
