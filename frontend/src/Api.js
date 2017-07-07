import Axios from 'axios'

const axios = Axios.create({ baseURL: 'http://localhost:8080/v1/' })

const getAll = (endpoint) => {
    return axios.get(endpoint)
}

const post = (endpoint, params) => {
    return axios.post(endpoint, params)
}

const get = (endpoint, id, params) => {
    return axios.get(`${endpoint}/${id}`, params)
}

const put = (endpoint, id, params) => {
    return axios.put(`${endpoint}/${id}`, params)
}

const proto = {
    getAll,
    post,
    get,
    put
}

export default function() {
    return Object.assign({}, proto)
}