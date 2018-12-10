import React, {Component} from 'react';
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';

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
        <InputField title='Email:' type='email' name='email' handleChange={this.props.handleChange} />
        <InputField title='Password:' type='password' name='password' handleChange={this.props.handleChange} />
        <FormButton className='form-button button' type='submit' name='Log in' />
        </form>
      </div>
    )
  }
}

export default Login;
