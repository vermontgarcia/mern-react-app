import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {getMySearches} from '../../service';
import {addProduct} from '../../service';
import Nav from '../Nav/Nav';
import FooterData from '../Common/FooterData';
import Item from '../Search/Item';

import {Layout} from 'antd';
import {Icon} from 'antd';
import {BackTop} from 'antd';
import {Collapse} from 'antd';
import {message} from 'antd';

const {Header, Footer, Content} = Layout;
const Panel = Collapse.Panel;

class Searches extends Component {
  constructor(){
    super();
    this.state = {
      searches: []
    }
  }

  handleAddList = (item, e) => {
    //console.log('Adding to list....', item)
    item.userId = this.props.state.user._id
    addProduct(item)
      .then(res => {
        //console.log('Add Item =====>', res.data.msg)
        message.success(res.data.msg);
      })
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
    const {searches} = this.state;
    return (
      <div>
        <Layout>
          <Header>
            <Nav user={user} handleLogout={this.props.handleLogout} />
          </Header>
          <Content>
            <div className='searches-envelop'>
            <h1>Mis Búsquedas</h1>

            <Collapse accordion>
              {
                searches.map((search, index) => (
                  <Panel header={`Busqueda por "${search.search}" @ el "${search.created_at}"`} key={index}>
                    {search.items.map((item, index) => <Item key={index} item={item}  handleAddList={this.handleAddList} /> )} 
                  </Panel>
                ))
              } 

            </Collapse>
            
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