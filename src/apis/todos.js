import axios from 'axios'

export default axios.create({
  // baseURL: 'https://my-json-server.typicode.com/giangle0411/todo-app',
  // baseURL: 'https://api.npoint.io/b21586229b746e33e61a'
  baseURL: 'http://localhost:5000',
})
