import React, {Component} from 'react';

class Home extends Component {
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

        {/*
        <h1>Home {this.props.state ? this.props.state.user.username : null}</h1>
        <strong>{this.props.state.user.loggedIn ? this.props.state.user.email: "Usuario no logged"}</strong>
                <button onClick={this.props.handleLogin}>Login</button>
        */}

        <h1>Home</h1>


      </div>
    )
  }
}

export default Home;

