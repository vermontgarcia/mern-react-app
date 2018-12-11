import React, {Component} from 'react';
import {isLoggedIn} from '../../authService'
import {searchProduct} from '../../service'
import {Link} from 'react-router-dom';
import InputField from '../Common/InputField';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      search: {}
    }
  }

  componentWillMount(){

    const token = localStorage.getItem('token');
    token ? isLoggedIn(this.props.history) : this.props.history.push('/login');

  }

  handleChange = (e) => {
    const {search} = this.state;
    search.product = e.target.value;
    this.setState({search})
    searchProduct(search);
  }

  render(){
    //console.log(this.props);
    return (
      <div>

        {/*
        <h1>Home {this.props.state ? this.props.state.user.username : null}</h1>
        <strong>{this.props.state.user.loggedIn ? this.props.state.user.email: "Usuario no logged"}</strong>
                <button onClick={this.props.handleLogin}>Login</button>
        */}

        <h1>Home</h1>

        <Link to='/profile'>Profile</Link>

        <InputField name='search' placeholder='Search' handleChange={this.handleChange} />

        <p onClick={this.props.handleLogout}>Logout</p>


      </div>
    )
  }
}

export default Home;

