import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {getMyList} from '../../service';
import Nav from '../Nav/Nav';

import {Layout} from 'antd';
import {Icon} from 'antd';
import {BackTop} from 'antd';

const {Header, Footer, Content} = Layout

class List extends Component {
  constructor(){
    super();
    this.state = {
      walmart: [],
      superama: [],
      list: []
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');
    
    this.props.handleSetState()
    
    getMyList(this.props.state.user._id)
      .then(res => {
        console.log('List Data =====>', res.data.msg)
        let list = res.data.list;
        this.setState({list})
        console.log('List from state =====>', this.state.list)
      })
      .catch((err) => {
        console.log('Get List Error =====> ', err.response);
        err.response.data.msg ? alert(err.response.data.msg) : console.log('No message');
      });
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
            <h1>Mi lista</h1>
            
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

export default List;