import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';

class Nav extends Component {
  render(){
    const {user} = this.props
    return (
      <nav className='nav'>
        <div>
          <Icon type='menu' style={{ fontSize: '30px'}}/>
        </div>
        <div>
          <NavLink to='/'><img className='nav-logo' src='/search.png' alt='Logo' /></NavLink>
        </div>
        <div>
          {user ? <NavLink to='/profile'><img className='nav-profile-picture' alt={user.name} src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} /></NavLink> : null}
        </div>
      </nav>
    )
  }
}

export default Nav;