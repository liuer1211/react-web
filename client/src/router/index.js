import {lazy} from 'react';

const routerList = [
  {
    path: "/login",
    component: lazy(()=> import('../pages/login'))
  },
  {
    path: "/",
    component: lazy(()=> import('../pages/admin'))
  }
]

export default routerList;