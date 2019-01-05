import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {getMySearches} from '../../service';
import Nav from '../Nav/Nav';
import FooterData from '../Common/FooterData';

import {Layout} from 'antd';
import {Icon} from 'antd';
import {BackTop} from 'antd';

const {Header, Footer, Content} = Layout

class Searches extends Component {
  constructor(){
    super();
    this.state = {
      searches: []
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

    this.props.handleSetState()

    getMySearches(this.props.state.user._id)
      .then(res => {
        console.log('Searches Data =====>', res.data.msg)
        let searches = res.data.searches;

        this.setState({searches})
        console.log('Searches from state =====>', this.state)
      })
      .catch((err) => {
        console.log('Get Searches Error =====> ', err.response);
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
            <h1>Mis Búsquedas</h1>
            
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

export default Searches;