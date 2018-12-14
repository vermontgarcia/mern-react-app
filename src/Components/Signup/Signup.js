import React, {Component} from 'react'
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';
import {Link} from 'react-router-dom';

class Signup extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>Signup</h1>
        </div>
        <div className='form-envelop'>
          <form onSubmit={this.props.handleSignup}>
            <div className='fields-envelop'>
              <InputField className='input' title='Name:' type='text' name='name' placeholder='What is your name?' handleChange={this.props.handleChange} autofocus='autofocus' />
              <InputField className='input' title='Email:' type='email' name='email' placeholder='user@copareit.com' handleChange={this.props.handleChange} />
              <InputField className='input' title='Password:' type='password' name='password' placeholder='Your password' handleChange={this.props.handleChange} />
              <InputField className='input' title='Confirm Password:' type='password' name='confirmPassword' placeholder='Same password' handleChange={this.props.handleChange} />
            </div>
            <div className='button-envelop'>
              <FormButton className='form-button button' type='submit' name='Sign up' />
            </div>
          </form>
        </div>
        <div>
          <p>Already have an account? <span><Link to='/login' >Log in</Link></span></p>
        </div>
      </div>
    )
  }
}

export default Signup;