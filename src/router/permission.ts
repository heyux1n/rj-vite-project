import router from '@/router'
import store from '@/store'
import {getToken} from '@/util/auth' // 验权
const whiteList = ['/login', '/404'] //白名单,不需要登录的路由


router.beforeEach((to, from, next) => {
  if (getToken()) {
    //如果已经登录
    if (to.path === '/login') {
      next({path: '/'})
    } else if (!store.getters.userId) {
      store.dispatch('setUserInfo').then(() => {
        next({...to})
      })
    } else {
      next()
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    //如果前往的路径是白名单内的,就可以直接前往
    next()
  } else {
    //如果路径不是白名单内的,而且又没有登录,就跳转登录页面
    store.commit('resetUserInfo')
    next('/login')
  }
})
router.afterEach(() => {
})
