import Axios from 'axios'
import {ElMessage} from 'element-plus'
import {getToken} from "@/util/auth";

const ENV_PARAMS = import.meta.env; // 这是Vite官方指导获取环境变量的方式
/**
 * 判断是生产环境还是本地环境
 * 生成环境使用 /api 前缀
 * 本地环境使用 /mock 前缀
 */
export const getBaseUrl = (): string => {
  const {DEV, VITE_DEV_API, VITE_PRD_API} = ENV_PARAMS;
  return DEV ? VITE_DEV_API : VITE_PRD_API;
};


const axios = Axios.create({
  baseURL: '/api',
  timeout: 10000 // 请求超时 10s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  config => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 此处可以执行处理添加token等逻辑
     */
    let token = getToken()
    if (config.headers && token) {
      config.headers["Authorization"] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    let code = response.data.code
    if(200 !== code) {
      let message = response.data.message
      ElMessage.error(`错误码值: ${code}, 提示信息: ${message}`)
      console.error(`[Axios Service Error]`, response)
      return Promise.reject(response.data)
    }
    return response.data
  },
  (error) => {
    if (error.response && error.response.data) {
      let code = error.response.status
      let message = error.message
      ElMessage.error(`错误码值: ${code}, 提示信息: ${message}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
