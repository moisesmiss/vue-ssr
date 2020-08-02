import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/hello', component: () => import('../views/Hello.vue') },
      { path: '/about', component: () => import('../views/About.vue') },
      { path: '/', redirect: '/hello' }
    ]
  })
}
