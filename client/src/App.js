import {lazy,Suspense} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import routerList from "./router"
import './App.css';

const Login = lazy(()=> import('./pages/login'))
const Admin = lazy(()=> import('./pages/admin'))

function App() {
  return (
    <Suspense fallback={<h1></h1>}>
      <BrowserRouter>
        <Switch>
          {/* {
            routerList.map(item=>{
              <Route path={item.path} component={item.component}></Route>
            })
          } */}
          <Route path="/login" component={Login}></Route>
          <Route path='/' component={Admin}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
