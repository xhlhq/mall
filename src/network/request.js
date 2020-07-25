import axios from 'axios'

function request(config){
    const instancel = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instancel.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);
    })
    instancel.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err);
    })

    return instancel(config)
}
export default request