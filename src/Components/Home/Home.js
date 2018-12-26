import React, {Component} from 'react';
import {isLoggedIn} from '../../authService'
import {searchProduct} from '../../service'
//import {Link} from 'react-router-dom';
import InputField from '../Common/InputField';
import Nav from '../Nav/Nav';
import Item from './Item';

import {Skeleton} from 'antd';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      search: {},
      items: []
    }
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

  handleSearch = (e) => {
    const {search} = this.state;
    let {items} = this.state;
    searchProduct(search)
      .then(res => {
        console.log('Search Data =====>', res.data.msg)
        items = res.data.items;
        localStorage.setItem('items', JSON.stringify(items));
        this.setState({items})
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
    const {user} = this.props.state
    const {items} = this.state
    console.log('Items initial', items)
    return (
      <div>
        <Nav user={user} />

        {/*
        <h1>Home {this.props.state ? this.props.state.user.username : null}</h1>
        <strong>{this.props.state.user.loggedIn ? this.props.state.user.email: "Usuario no logged"}</strong>
                <button onClick={this.props.handleLogin}>Login</button>
        */}

        <div>
          <h1>Home</h1>
        </div>
        <div className='home-envelop'>
          <InputField name='search' className='input-search input' placeholder='Search' handleChange={this.handleChange} />
          <span onClick={this.handleSearch}>Search</span>
          <Skeleton active/>
          {items ? items.map((item, index) => <Item key={index} {...item} />) : null}
          <p onClick={this.props.handleLogout}>Logout</p>
        </div>


      </div>
    )
  }
}
//import { from } from 'rxjs';

export default Home;

