import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import ProfileField from './ProfileField';
import Nav from '../Nav/Nav';

class Profile extends Component {

  constructor(){
    super();
    this.state = {
      edit: false,
      user: {}
    }
  }


  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  }

  componentWillMount(){

    const token = localStorage.getItem('token');

    token ? isLoggedIn(this.props.history) : this.props.history.push('/login')

    this.props.handleSetState()

  }

  render(){
    //console.log(this.props)
    const {user} = this.props.state
    const {edit} = this.state
    //console.log("user",user)
    return(
      <div>
        <Nav user={user} handleLogout={this.props.handleLogout} />
        <div>
          <h1 onClick={this.handleEdit}>Mi perfil</h1>
          {edit ? <h2>Edit</h2>:null}
        </div>

        <div className='profile-data'>
          <img className='profile-picture' src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} alt={user.name} />
          <ProfileField title='Nombre' name={user.username} />
          <ProfileField title='Email' name={user.email} />
          <ProfileField title='Rol' name={user.role} />
          <ProfileField title='Estado' name={user.status} />
        </div>

        <div>
          <p onClick={this.props.handleLogout}>Logout</p>
        </div>
      </div>
    )
  }
}

export default Profile;