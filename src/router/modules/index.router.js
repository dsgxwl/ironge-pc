import Layout from '@/layout'

export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import(/* webpackChunkName: 'Home' */ '@/views/Home'),
        meta: { title: '首页' },
      },
      {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: '404' */ '@/views/Error/404.vue'),
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
