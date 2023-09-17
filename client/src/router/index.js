import {lazy} from 'react';

const routerList = [
  {
    path: "/login",
    component: lazy(()=> import('../pages/login'))
  },
  {
    path: "/admin",
    component: lazy(()=> import('../pages/admin'))
  },
  {
    path: "/",
    component: lazy(()=> import('../pages/login'))
  }
]

export default routerList;