import axios from 'axios';
import {message} from 'antd';

//const base_url = 'http://localhost:3500/api';
const base_url = window.location.hostname === 'localhost' ? 'http://localhost:3500/api' : 'https://compare-it-mern.herokuapp.com/api';


export const signup = (user, history) => {
  axios.post(`${base_url}/auth/signup`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      message.success(res.data.msg);
      //alert(res.data.msg);
      //console.log(res)
      history.push('/')
    })
    .catch((err) => {
      console.log('Error Signup =====> ', err.response);
      message.error(err.response.data.msg);
      //alert(err.response.data.msg);
    })
}

export const login = (user, history) => {
  console.log('URL =====> ', base_url);
  //console.log('User =====>', user)
  axios.post(`${base_url}/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      message.success(res.data.msg);
      //alert(res.data.msg);
      //console.log(res.data.user)
      history.push('/')
    })
    .catch(err => {
      //console.log('Error Login =====> ', err.response);
      err.response.data.msg ? message.error(err.response.data.msg) : console.log('No message');
    });
}

export const logout = (history) => {
  //console.log('Logging out......')
  //localStorage.clear();
  localStorage.removeItem('token');
  message.success('Listo! Regresa pronto');
  history.push('/login');
}


export const editUser = (user) => {
  let formData = new FormData();
  Object.keys(user).forEach(key => {
    formData.append(key, user[key])
  });
  return axios.patch(`${base_url}/auth/edit`, formData)
}

export const isLoggedIn = (history) => {
  //console.log('Verifying token.....')

  const token = localStorage.getItem('token');

  //console.log(user)

  axios.get(`${base_url}/auth/loggedin`, {
    headers: {
      'x-access-token': token
    }
  })
    .then(res => {
      //console.log('Valid token', res.data);
      //alert(res.data.msg)
      
    })
    .catch(err => {
      message.error(err.response.data.msg);
      //alert(err.response.data.msg)
      //localStorage.clear();
      localStorage.removeItem('token');
      history.push('/login')
    });  
}