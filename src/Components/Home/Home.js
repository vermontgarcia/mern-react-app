import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';

import {Layout} from 'antd';
import {Icon} from 'antd';
import {BackTop} from 'antd';
import FooterData from '../Common/FooterData';

const {Header, Footer, Content} = Layout

class Home extends Component {

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

    if (localStorage.getItem('items') !== undefined){
      console.log('Yes Items')
      const items = JSON.parse(localStorage.getItem('items'))
      items ? this.setState({items}) : console.log('No items found');  
    } else {
      console.log('No Items')
    }

    this.props.handleSetState()

  }

  render() {
    const {user} = this.props.state;
    return (
      <div>
        <Layout>
          <Header>
            <Nav user={user} handleLogout={this.props.handleLogout} />
          </Header>
          <Content>
            <div className='profile-data'>
            <h1>Bienvenido</h1>
            <img className='profile-picture' src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} alt={user.name} />
            <p>{user.username}</p>
            <div>
              <Link to='/search' >
                <div className='home-btn ant-btn login-form-button ant-btn-primary'>
                  <span>
                    Nueva Busqueda
                  </span>
                </div>
              </Link>
              <Link to='/mysearches' >
                <div className='home-btn ant-btn login-form-button ant-btn-primary'>
                  <span>
                    Mis Busquedas
                  </span>
                </div>
              </Link>
              <Link to='/mylist' >
                <div className='home-btn ant-btn login-form-button ant-btn-primary'>
                  <span>
                    Mi Lista
                  </span>
                </div>
              </Link>

            </div>
            
        </div>
          </Content>
          <Footer>
            <FooterData />  
          </Footer>
        </Layout>
        <div>
          <BackTop id='back-top-custom'>
            <div className="ant-back-top-inner"><Icon type="to-top" /></div>
          </BackTop>
        </div>
      </div>
        
    );
  }
}

export default Home;