import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {getMyList} from '../../service';
import Nav from '../Nav/Nav';

import {
  Layout,
  Icon,
  BackTop,
  Table
} from 'antd';

const {Header, Footer, Content} = Layout

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

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
        let walmart = []
        let superama = []

        list.forEach(item => {
          if(item.market === 'Walmart') walmart.push(item);
          if(item.market === 'Superama') superama.push(item);        
        });
              
        this.setState({list, walmart, superama})
        console.log('List from state =====>', this.state)
      })
      .catch((err) => {
        console.log('Get List Error =====> ', err.response);
        err.response.data.msg ? alert(err.response.data.msg) : console.log('No message');
      });
  }

  

  render() {
    const {user} = this.props.state;

    const columns = [{
      title: 'Super',
      dataIndex: 'market',
      filters: [{
        text: 'Superama',
        value: 'Superama',
      }, {
        text: 'Walmart',
        value: 'Walmart',
      }],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.market.indexOf(value) === 0,
      //sorter: (a, b) => a.name.length - b.name.length,
    }, {
      title: 'Descripcion',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name - b.name,
    }, {
      title: 'Precio',
      dataIndex: 'price'
    }];

    return (
      <div>
        <Layout>
          <Header>
            <Nav user={user} handleLogout={this.props.handleLogout} />
          </Header>
          <Content>
            <div className='profile-data'>
            <h1>Mi lista</h1>

            <Table columns={columns} dataSource={this.state.list} onChange={onChange} />
            
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