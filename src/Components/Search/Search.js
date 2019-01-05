import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {searchProduct} from '../../service';
import {addProduct} from '../../service';
import {addSearch} from '../../service';
import FooterData from '../Common/FooterData';
import Nav from '../Nav/Nav';
import Item from './Item';

import {
  Skeleton,
  Layout,
  Icon,
  Input,
  Spin,
  BackTop,
  Divider,
  message
} from 'antd';

const {Header, Footer, Content} = Layout
const Search = Input.Search;

class NewSearch extends Component {
  constructor(){
    super();
    this.state = {
      search: {},
      items: [],
      searching: false,
      collapsed: false,
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

    if (localStorage.getItem('items') !== undefined){
      //console.log('Yes Items')
      const items = JSON.parse(localStorage.getItem('items'))
      items ? this.setState({items}) : console.log('No items found');  
    } else {
      console.log('No Items')
    }
    this.props.handleSetState()
  }

  handleChange = (e) => {
    const {search} = this.state;
    //let {items} = this.state;
    search.product = e.target.value;
    this.setState({search})
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
  
  handleSearch = (value) => {
    if (value === '') return;
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
        let search = {
          userId:this.props.state.user._id,
          search: value,
          items: items
        }
        console.log('Searches ', search)
        addSearch(search)
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
            <Nav user={user} handleLogout={this.props.handleLogout} />
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
              <Divider />
              <p>Mi última búsqueda</p>
              <div className='cards-envelop'>
                {items ? items.map((item, index) => <Item key={index} item={item}  handleAddList={this.handleAddList} />) : <Skeleton active/>}
              </div>
              <p onClick={this.props.handleLogout}>Logout</p>
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
    )
  }
}

export default NewSearch;

