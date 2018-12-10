import axios from 'axios';

const base_url = 'http://localhost:3500/api';


export const signup = (user, history) => {
  axios.post(`${base_url}/auth/signup`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      //console.log(res)
      history.push('/')
    })
    .catch((err) => {
      //console.log('Error Signup =====> ', err.response);
      alert(err.response.data.msg);
    })
}

export const login = (user, history) => {
  //console.log('User =====>', user)
  axios.post(`${base_url}/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      //console.log(res.data.user)
      history.push('/')
    })
    .catch(err => {
      //console.log('Error Login =====> ', err.response);
      alert(err.response.data.msg);
    });
}

export const logout = (history) => {
  //console.log('Logging out......')
  localStorage.clear();
  history.push('/login');
}


export const upload = (user) => {
  let formData = new FormData();
  Object.keys(user).forEach(key => {
    formData.append(key, user[key])
  });
  return axios.patch(`${base_url}/auth/upload`, formData)
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
      //console.log('Invalid token', err.response.data.msg);
      alert(err.response.data.msg)
      history.push('/login')
    });  
}