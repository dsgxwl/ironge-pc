import Layout from '@/layout'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Layout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: 'Login' */ '@/views/Login'),
        meta: { title: '登录' },
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: Layout,
    children: [
      {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: 'Register' */ '@/views/Login/register'),
        meta: { title: '注册' },
      },
    ],
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: Layout,
    children: [
      {
        path: '/resetPassword',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: 'ResetPassword' */ '@/views/Login/reset'),
        meta: { title: '忘记密码' },
      },
    ],
  },
]