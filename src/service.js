import axios from 'axios';


//const base_url = 'http://localhost:3500/api';


const base_url = window.location.hostname === 'localhost' ? 'http://localhost:3500/api' : 'https://compare-it-mern.herokuapp.com/api';


export const searchProduct = (search) => {
  console.log('Service',search)
  console.log('URL =====> ', base_url);
  return axios.get(`${base_url}/search/${search.product}`)
    /*
    .then(res => {
      console.log('Search Data =====>', res.data.msg)
      //alert(res.data.msg);
      //console.log(res)
      //history.push('/')
    })
    .catch((err) => {
      //console.log('Error Signup =====> ', err.response);
      err.response.data.msg ? alert(err.response.data.msg) : console.log('No message');
    })
    */
}