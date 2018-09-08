import axios from 'axios'
import { message } from 'antd'

axios.interceptors.request.use(function(config) {
    message.loading('加载中', 0)
    return config
})

axios.interceptors.response.use(function(config) {
    message.hide()
    return config
})