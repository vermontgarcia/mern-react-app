import React, {Component} from 'react';
import {isLoggedIn} from '../../authService'
import {searchProduct} from '../../service'
//import {Link} from 'react-router-dom';
import InputField from '../Common/InputField';
import Nav from '../Nav/Nav';
import Item from './Item';

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
        console.log('Items =====>', res.data.items)
        items = res.data.items;
        console.log('Items before set state =====>', items)
        this.setState({items})
        //alert(res.data.msg);
        //console.log(res)
        //history.push('/')
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
          <ul>
            {items ? items.map((item, index) => <Item key={index} {...item} />) : null}
          </ul>
          <p onClick={this.props.handleLogout}>Logout</p>
        </div>


      </div>
    )
  }
}

export default Home;

