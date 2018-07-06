import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import UserPage from './components/UserPage.vue'
import Soz1 from './components/Soz1.vue'
import Soz2 from './components/Soz2.vue'
import Soz3 from './components/Soz3.vue'
import July from './components/July.vue'
import January from './components/January.vue'
import February from './components/February.vue'
import March from './components/March.vue'
import April from './components/April.vue'
import May from './components/May.vue'
import June from './components/June.vue'
import August from './components/August.vue'
import September from './components/September.vue'
import October from './components/October.vue'
import November from './components/November.vue'
import December from './components/December.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/userpage',
      name: 'userpage',
      component: UserPage
    },
    {
      path: '/Soz1',
      name: 'Soz1',
      component: Soz1
    },
    {
      path: '/Soz2',
      name: 'Soz2',
      component: Soz2
    },
    {
      path: '/Soz3',
      name: 'Soz3',
      component: Soz3
    },
    {
      path: '/Calendar/July',
      name: 'July',
      component: July
    },
    {
      path: '/Calendar/January',
      name: 'January',
      component: January
    },
    {
      path: '/Calendar/February',
      name: 'February',
      component: February
    },
    {
      path: '/Calendar/March',
      name: 'March',
      component: March
    },
    {
      path: '/Calendar/April',
      name: 'April',
      component: April
    },
    {
      path: '/Calendar/May',
      name: 'May',
      component: May
    },
    {
      path: '/Calendar/June',
      name: 'June',
      component: June
    },
    {
      path: '/Calendar/August',
      name: 'August',
      component: August
    },
    {
      path: '/Calendar/September',
      name: 'September',
      component: September
    },
    {
      path: '/Calendar/October',
      name: 'October',
      component: October
    },
    {
      path: '/Calendar/November',
      name: 'November',
      component: November
    },
    {
      path: '/Calendar/December',
      name: 'December',
      component: December
    },
    {
      path: '/Calendar',
      name: 'July',
      component: July
    }
  ]
})