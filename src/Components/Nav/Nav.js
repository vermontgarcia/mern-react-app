import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  render(){
    //console.log('Props =====>', this.props)
    const {user} = this.props
    return (
      <nav className='nav'>
        <div>
          Menu
        </div>
        <div>
          App logo
        </div>
        <div>
          {user ? <NavLink to='/profile'><img className='nav-profile-picture' alt={user.name} src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} /></NavLink> : null}
        </div>
      </nav>
    )
  }
}

export default Nav;