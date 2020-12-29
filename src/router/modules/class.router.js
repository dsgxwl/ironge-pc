import Layout from '@/layout'
export default [
  {
    path: '/class',
    name: 'Class',
    component: Layout,
    redirect: '/class/index',
    children: [
      {
        path: 'index',
        name: 'ClassIndex',
        component: () => import(/* webpackChunkName: 'ClassIndex' */ '@/views/class'),
        meta: { title: '班级', auth: true },
      },
    ],
  },
]
