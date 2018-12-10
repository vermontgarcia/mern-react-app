import React, {Component} from 'react'
import {isLoggedIn} from '../../authService'

class Profile extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount (){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

  }


  render(){
    return(
      <div>
        <h1>Profile</h1>
        <p onClick={this.props.handleLogout}>Logout</p>
      </div>
    )
  }
}

export default Profile;