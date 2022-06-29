import {createStore} from 'vuex'
import user from '@/store/modules/user'
import {getUserInfo, login} from "@/api/auth";
import {setToken} from "@/util/auth";

const defaultState = {
  id: "",
  account: "",
  password: "",
  realname: "",
  nickname: "",
  role: "",
  dept: "",
}


// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.id = userInfo.id;
      state.account = userInfo.account;
      state.password = userInfo.password;
      state.realname = userInfo.realname;
      state.nickname = userInfo.nickname;
      state.role = userInfo.role;
      state.dept = userInfo.dept;
    },
  },
  actions: {
    login({commit, state}, loginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm).then(res => {
          setToken(res.data)
          getUserInfo().then(res => {
            commit('setUserInfo', res.data);
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
      })
    }
  },
  modules: {}
})
