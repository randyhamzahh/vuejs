import DefaultView from './../layouts/Default.vue'
import Home from './../views/Home.vue'
import Dashboard from './../views/pages/dashboard.vue'
import Profile from './../views/pages/profile.vue'
import Campaign from './../views/pages/campaign.vue'
import CampaignList from './../views/pages/campaignlist.vue'
import RegistrationView from './../layouts/Register.vue'
import Registration from './../views/pages/registration.vue'
import Login from './../views/pages/login.vue'
import Setting from './../views/pages/setting.vue'

const routes = [
    {
      path: '/',
      component: () => DefaultView,
      children: [
        {
          path: '',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => Home,
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => Dashboard,
        },
        {
          path: 'profile',
          name: 'Profile',
          component: () => Profile,
        },
        {
          path: 'campaign',
          name: 'Campaign',
          component: () => Campaign,
        },
        {
          path: 'campaign-list',
          name: 'Campaign List',
          component: () => CampaignList,
        },
      ],
    },
    {
      path: '/reg',
      component: () => RegistrationView,
      children: [
        {
          path: '',
          name: 'Registration',
          component: () => Registration,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => Login,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => Setting,
    },
  ]

  export default routes