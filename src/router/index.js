import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import AddLayers from '@/views/AddLayers'
import DataVisual from '@/views/Data-visual'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DataVisual',
    component: DataVisual
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/AddLayers',
  //   name: 'AddLayers',
  //   component: AddLayers
  // },
]

const router = new VueRouter({
  routes
})

export default router
