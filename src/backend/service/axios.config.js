import axios from 'axios'

const auth = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:9000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export default auth
