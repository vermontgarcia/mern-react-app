import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount (){

  }

  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

export default Login;
