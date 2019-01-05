import React, {Component} from 'react';
import {isLoggedIn} from '../../authService';
import {editUser} from '../../authService'
import ProfileField from './ProfileField';
import FooterData from '../Common/FooterData';
import Nav from '../Nav/Nav';
import {Button, Spin, Layout, Icon, BackTop} from 'antd';

const {Header, Footer, Content} = Layout

class Profile extends Component {

  constructor(){
    super();
    this.state = {
      edit: false,
      searching: false,
      user: {}
    }
  }


  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  }

  handleEditUser = (e) => {
    let {searching} = this.state;
    searching = true;
    this.setState({searching})
    const {user} = this.props.state;
    let field = e.target.name;
    user[field] = e.target.files ? e.target.files[0] : e.target.value;
    this.setState({user})
    //console.log(this.state.user);
    editUser(user)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        this.props.handleSetState();
        this.setState({user: res.data.user})
        searching = false;
        this.setState({searching});
      })
      .catch(err => {
        console.log('Error uploading photo =====>', err.response)
      });
  }

  componentWillMount(){

    const token = localStorage.getItem('token');

    token ? isLoggedIn(this.props.history) : this.props.history.push('/login')

    this.props.handleSetState()

  }

  render(){
    //console.log(this.props)
    const {user} = this.props.state
    const {edit} = this.state
    let {searching} = this.state;
    //console.log("user",user)
    return(
      <div>
        <Layout>
          <Header>
            <Nav user={user} handleLogout={this.props.handleLogout} />
          </Header>
          <Content>
            <div className='profile-data'>
              <div>
                <h1 onClick={this.handleEdit}>Mi perfil</h1>
                {edit ? <h2>Edit</h2>:null}
              </div>
              <div className='picture-box'>
                <img className='profile-picture' src={user.profilePicture === 'avatar' ? '/avatar.png' : user.profilePicture} alt={user.name} />
                <label htmlFor="profile-picture" id='picture-btn' className='ant-btn login-form-button ant-btn-primary'>
                    Edit Photo
                    <input
                        id='profile-picture'
                        type='file'
                        name='profilePicture'
                        onChange={this.handleEditUser} />
                  </label>
              </div>
              {searching ? <Spin /> : null}
              <ProfileField title='Nombre' name={user.username} />
              <ProfileField title='Email' name={user.email} />
              <ProfileField title='Rol' name={user.role} />
              <ProfileField title='Estado' name={user.status} />
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

export default Profile;