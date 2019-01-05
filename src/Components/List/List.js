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
import FooterData from '../Common/FooterData';

const {Header, Footer, Content} = Layout

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class List extends Component {
  constructor(){
    super();
    this.state = {
      walmart: [],
      totalWalmart: 0,
      superama: [],
      list: [],
      table: {
        bordered: false,
        pagination: true,
        size: 'small',
        title: undefined,
        showHeader: true,
        scroll: undefined,
        hasData: true,
      }
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
        let totalWalmart = 0;
        let totalSuperama = 0;

        list.forEach(item => {
          if(item.market === 'Walmart'){
            walmart.push(item);
            totalWalmart += item.priceNum;
          } 
          if(item.market === 'Superama') {
            superama.push(item);
            totalSuperama += item.priceNum;
          } 
        });

        //let totalWalmart = walmart.reduce((acc, num) => acc + num.priceNum)
        totalSuperama = totalSuperama.toFixed(2)
        totalWalmart = totalWalmart.toFixed(2)

        this.setState({list, walmart, superama, totalWalmart, totalSuperama})
        console.log('List from state =====>', this.state)
      })
      .catch((err) => {
        console.log('Get List Error =====> ', err.response);
        err.response.data.msg ? alert(err.response.data.msg) : console.log('No message');
      });
  }

  

  render() {
    const {user} = this.props.state;
    const {totalWalmart, totalSuperama} = this.state

    const columns = [{
      title: 'Descripción',
      dataIndex: 'name',
      width: 300,
      render: (text, record) => (
        <span>
          <img className='image-list' src={record.image} /> {record.name}
        </span>
      ),
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
            <div className='list-data'>

              <div>
                <div>
                  <h1>Mi lista</h1>
                </div>
                <p className='total-list'>Superama ${totalSuperama}</p>
                <Table {...this.state.table} columns={columns} dataSource={this.state.superama} onChange={this.onChange} />
              </div>
              <div>
                <p className='total-list'>Walmart ${totalWalmart}</p>
                <Table {...this.state.table} columns={columns} dataSource={this.state.walmart} onChange={this.onChange} />
            </div>

            
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

export default List;