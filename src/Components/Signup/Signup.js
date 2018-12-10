import React, {Component} from 'react'
import InputField from '../Common/InputField';
import FormButton from '../Common/FromButton';

class Signup extends Component {
  render(){
    return(
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.props.handleSignup}>
          <InputField title='Name:' type='text' name='name' handleChange={this.props.handleChange} />
          <InputField title='Email:' type='email' name='email' handleChange={this.props.handleChange} />
          <InputField title='Password:' type='password' name='password' handleChange={this.props.handleChange} />
          <InputField title='Confirm Password:' type='password' name='confirmPassword' handleChange={this.props.handleChange} />
          <FormButton className='form-button button' type='submit' name='Sign up' />
        </form>
      </div>
    )
  }
}

export default Signup;