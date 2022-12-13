import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: function(){
          return import('./components/LoginPage.vue')
        },
        props: true
    },
    {
        path: "/MainPage",
        name: "MainPage",
        component: function(){
          return import('./components/MainPage.vue')
        },
        props: true
    },
    {
      path: "/ChatPage",
      name: "ChatPage",
      component: function(){
        return import('./components/ChatPage.vue')
      },
      props: true
  },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router