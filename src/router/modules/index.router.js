import Layout from '@/layout'

export default [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import(/* webpackChunkName: 'Home' */ '@/views/home'),
        meta: { title: '首页' },
      },
      {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: '404' */ '@/views/error/404.vue'),
        hidden: true,
        meta: { title: '404' },
      },
    ],
  },
  {
    path: '*',
    name: '*404',
    redirect: '/404',
    hidden: true,
  },
]
