import {createStore} from 'vuex'
import {getUserInfo, login} from "@/api/auth";
import {removeToken, setToken} from "@/util/auth";

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
  getters: {
    userId: state => state.id,
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

    resetUserInfo(state) {
      state.id = '';
      state.account = '';
      state.password = '';
      state.realname = '';
      state.nickname = '';
      state.role = '';
      state.dept = '';
    },
  },
  actions: {
    login({commit, state}, loginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm).then(res => {
          setToken(res.data)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    logout({commit}) {
      removeToken()
      commit('resetUserInfo');
    },

    setUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          commit('setUserInfo', res.data);
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {}
})
