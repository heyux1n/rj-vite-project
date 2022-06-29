import axios from "@/util/axios";

/**
 * 登录
 * @param account
 * @param password
 */
export function login(loginForm: any) {
  return axios.post('/login', loginForm)
}


/**
 * 获取当前登录用户
 */
export function getUserInfo() {
  return axios.get('/user')
}