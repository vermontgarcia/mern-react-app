import axios from 'axios';

const base_url = 'http://localhost:3500/api';


export const searchProduct = (search) => {
  console.log('Service',search)
  axios.get(`${base_url}/search/${search.product}`)
    .then(res => {
      console.log('Search Data =====>', res.data.msg)
      //alert(res.data.msg);
      //console.log(res)
      //history.push('/')
    })
    .catch((err) => {
      //console.log('Error Signup =====> ', err.response);
      alert(err.response.data.msg);
    })
}