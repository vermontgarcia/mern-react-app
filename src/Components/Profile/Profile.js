import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import ProfileField from './ProfileField';
import Nav from '../Nav/Nav';

class Profile extends Component {

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');

    token ? isLoggedIn(this.props.history) : this.props.history.push('/login')


    /*
    if (token){
      isLoggedIn(this.props.history)
      const user = JSON.parse(localStorage.getItem('user'))
      this.setState({user}) 
    } else {
      this.props.history.push('/login');
    } 
    */

  }


  render(){
    console.log(this.props)
    const {user} = this.props.state
    return(
      <div>
        <Nav user={user}/>
        <div>
          <h1>Profile</h1>
        </div>

        <div className='profile-data'>
          <img className='profile-picture' src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} alt={user.name} />
          <ProfileField title='Name' name={user.name} />
          <ProfileField title='Email' name={user.email} />
          <ProfileField title='Role' name={user.role} />
          <ProfileField title='Status' name={user.status} />
        </div>

        <div>
          <p onClick={this.props.handleLogout}>Logout</p>
        </div>
      </div>
    )
  }
}

export default Profile;