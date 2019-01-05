import axios from 'axios';


//const base_url = 'http://localhost:3500/api';


const base_url = window.location.hostname === 'localhost' ? 'http://localhost:3500/api' : 'https://compare-it-mern.herokuapp.com/api';


export const searchProduct = (search) => {
  console.log('Service =====>', search)
  console.log('URL =====> ', base_url);
  return axios.get(`${base_url}/search/${search.product}`)
}

export const addProduct = (item) => {
  console.log('Service =====>', item)
  return axios.post(`${base_url}/items`, item)
}

export const addSearch = (search) => {
  console.log('Service =====>', search)
  return axios.post(`${base_url}/items/log`, search)
}

export const getMyList = (id) => {
  console.log('Service =====>', id)
  return axios.get(`${base_url}/items/${id}`)
}

export const getMySearches = (id) => {
  console.log('Service =====>', id)
  return axios.get(`${base_url}/items/log/${id}`)
}