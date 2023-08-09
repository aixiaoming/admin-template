export default [
  { path: '/user', name: "1", layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name: "1",icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    name: "1",
    access: 'canAdmin',
    routes: [
      { path: '/admin',name: "1", redirect: '/admin/sub-page' },
      { path: '/admin/sub-page',name: "1", component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', name: "1",component: './TableList' },
  { path: '/', redirect: '/welcome',name: "1", },
  { path: '*', layout: false, component: './404' },
];
