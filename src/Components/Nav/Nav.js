import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import {Avatar} from 'antd';
import {Drawer, Divider} from 'antd';

class Nav extends Component {

  constructor(){
    super();
    this.state = {
      visible: false,
      placement: 'left'
    }
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render(){
    const {user} = this.props
    return (
      <nav className='nav'>
        <div className='mouseHover'>
          <Icon onClick={this.showDrawer} type='menu' style={{ fontSize: '20px'}}/>
        </div>
        <div>
          <NavLink to='/search'>
            <span className='nav-logo'>
              <i className="fas fa-search"></i>
            </span>
          </NavLink>
        </div>
        <div>
          {user ? <NavLink to='/profile'><Avatar src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} /></NavLink> : null}
        </div>
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className='drawer-wrapper'
        >
          <div><Link to='/' ><Icon type="home" /> Home</Link></div>
          <Divider />
          <div><Link to='/search' ><Icon type="search" /> Nueva Búsqueda</Link></div>
          <div><Link to='/mysearches' ><Icon type="file-search" /> Mis Búsquedas</Link></div>
          <div><Link to='/mylist' ><Icon type="file-done" /> Mi Lista</Link></div>
          <Divider />
          <div><Link to='/profile' ><Icon type="user" /> Mi Perfil</Link></div>
          <div><Link to='/' ><Icon type="setting" /> Ajustes</Link></div>
          <Divider />
          <div onClick={this.props.handleLogout} ><Link to=''><Icon type="logout" /> Cerrar Sesión</Link></div>
        </Drawer>
      </nav>
    )
  }
}

export default Nav;