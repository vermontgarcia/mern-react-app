import React, {Component} from 'react'
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';
import {Link} from 'react-router-dom';

class Signup extends Component {
  render(){
    return(
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.props.handleSignup}>
          <InputField title='Name:' type='text' name='name' placeholder='What is your name?' handleChange={this.props.handleChange} autofocus='autofocus' />
          <InputField title='Email:' type='email' name='email' placeholder='user@copareit.com' handleChange={this.props.handleChange} />
          <InputField title='Password:' type='password' name='password' placeholder='Your password' handleChange={this.props.handleChange} />
          <InputField title='Confirm Password:' type='password' name='confirmPassword' placeholder='Same password' handleChange={this.props.handleChange} />
          <FormButton className='form-button button' type='submit' name='Sign up' />
        </form>
        <div>
          <p>Already have an account? <span><Link to='/login' >Log in</Link></span></p>
        </div>
      </div>
    )
  }
}

export default Signup;