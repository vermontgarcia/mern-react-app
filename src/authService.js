import axios from 'axios';

const base_url = 'http://localhost:3500/api';


export const signup = (user, history) => {
  axios.post(`${base_url}/auth/signup`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      console.log(res)
      history.push('/profile')
    })
    .catch((err) => {
      console.log('Error Signup =====> ', err.response);
    })
}

export const login = (user, history) => {
  //console.log('User =====>', user)

  console.log(base_url)
  axios.post(`${base_url}/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      //console.log(res.data.user)
      history.push('/profile')
    })
    .catch(err => {
      console.log('Error Login =====> ', err.response);
      alert(err.response.data.msg);
    });
}


export const upload = (user) => {
  let formData = new FormData();
  Object.keys(user).forEach(key => {
    formData.append(key, user[key])
  });
  return axios.patch(`${base_url}/auth/upload`, formData)
}

export const isLoggedIn = (user, history) => {
  
}