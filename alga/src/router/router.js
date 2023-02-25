import { createRouter, createWebHashHistory } from 'vue-router'
const home = ()=>import('../view/home/home.vue')
const person = ()=>import('../view/person/person.vue')
const table = ()=>import('../view/table/table.vue')
const masking = ()=>import('../view/masking/masking.vue')
const routes = [
  {
    path:'/',
    name:'masking',
    component:masking,
    meta:{
      showTab:false
    }
  },
  {
    path:'/home',
    name:"home",
    component:home,
    meta: {
      i:0,
      transition:'slide-right'
		}
  },
  {
    path:'/person',
    name:"person",
    component:person,
    meta: {
      i:2,
      transition:'slide-right'
		}
  },
  {
    path:'/table',
    name:"table",
    component:table,
    meta: {
      i:1,
      transition:'slide-right'
		}
  },
]


const router = createRouter({
  history:createWebHashHistory(),
  routes
})



export default router