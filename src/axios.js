import axios from 'axios'

const instance = axios.create({ baseURL: "http://localhost:51871/api/" })
export default instance;
