import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:5011",
    headers: {"Content-type": "application/json",}
});