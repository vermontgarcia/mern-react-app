import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import Nav from '../Nav/Nav';

import {Layout} from 'antd';
import {Icon} from 'antd';
import {BackTop} from 'antd';

const {Header, Footer, Content} = Layout

class Searches extends Component {
  constructor(){
    super();
    this.state = {
      walmart: [],
      superama: [],
      searches: []
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

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
            <h1>Mis Búsquedas</h1>
            
        </div>
          </Content>
          <Footer>Footer</Footer>
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

export default Searches;