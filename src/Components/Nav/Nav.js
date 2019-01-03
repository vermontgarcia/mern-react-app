import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';
import {Avatar} from 'antd';

class Nav extends Component {
  render(){
    const {user} = this.props
    return (
      <nav className='nav'>
        <div>
          <Icon type='menu' style={{ fontSize: '20px'}}/>
        </div>
        <div>
          <NavLink to='/'><span className='nav-logo'><i class="fas fa-search"></i></span></NavLink>
        </div>
        <div>
          {user ? <NavLink to='/profile'><Avatar src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} /></NavLink> : null}
        </div>
      </nav>
    )
  }
}

export default Nav;