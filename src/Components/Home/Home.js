import React, {Component} from 'react';
import {isLoggedIn} from '../../authService'
import {searchProduct} from '../../service'
//import {Link} from 'react-router-dom';
import InputField from '../Common/InputField';
import Nav from '../Nav/Nav';
import Item from './Item';

import {Skeleton} from 'antd';
import {Layout} from 'antd';
import {Menu, Icon, Button } from 'antd';
import {Col, Row} from 'antd';
import {Input} from 'antd';
import {Spin} from 'antd';

const {Header, Footer, Sider, Content} = Layout
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class Home extends Component {
  constructor(){
    super();
    this.state = {
      search: {},
      items: [],
      searching: false,
      collapsed: false,
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

    const items = JSON.parse(localStorage.getItem('items'))
    items ? this.setState({items}) : console.log('No items found');  

    this.props.handleSetState()

    //let {user} = this.props.state;
    //user = JSON.parse(localStorage.getItem('user'))
    ////user ? this.setState({user}) : this.props.history.push('/login');
    //this.setState({user})
  }

  handleChange = (e) => {
    const {search} = this.state;
    //let {items} = this.state;
    search.product = e.target.value;
    this.setState({search})
  }
  
  handleSearch = (value) => {
    let {searching} = this.state;
    searching = true;
    this.setState({searching})
    const {search} = this.state;
    search.product = value;
    let {items} = this.state;
    searchProduct(search)
      .then(res => {
        console.log('Search Data =====>', res.data.msg)
        items = res.data.items;
        localStorage.setItem('items', JSON.stringify(items));
        this.setState({items})
        searching = false;
        this.setState({searching});
        console.log('Items from state =====>', this.state.items)
      })
      .catch((err) => {
        //console.log('Error Signup =====> ', err.response);
        err.response.data.msg ? alert(err.response.data.msg) : console.log('No message');
      });
    //console.log('Items =====> ', items)
    //this.setState({items})

  }

  render(){
    //console.log(this.props);
    let {searching} = this.state;
    const {user} = this.props.state;
    const {items} = this.state;
    console.log('Items initial', items)
    return (
      <div>
        <Layout>
          <Header>
            <Nav user={user} />
          </Header>
          <Content>
            <div className='home-envelop'>
              <div className='input-search'>
                <Search
                  placeholder='busca un articulo'
                  onSearch={value => this.handleSearch(value)}
                />
              </div>
              {searching ? <Spin /> : null}
              <div className='cards-envelop'>
                {items ? items.map((item, index) => <Item key={index} {...item} />) : <Skeleton active/>}
              </div>
              <p onClick={this.props.handleLogout}>Logout</p>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Home;

