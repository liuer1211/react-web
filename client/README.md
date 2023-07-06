# 开始
    yarn install
    yarn start

# 依赖
    yarn add react-router-dom@5
    yarn add less less-loader@5

# 路由
    Suspense 配合懒加载
    <Suspense fallback={<h1></h1>}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path='/' component={Admin}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </Suspense>

    HashRouter
    Link
    NavLink

    history: {length: 5, action: 'PUSH', location: {…}, createHref: ƒ, push: ƒ, …}
    location: {pathname: '/', search: '', hash: '', state: undefined}
    match: {path: '/', url: '/', isExact: true, params: {…}}
    staticContext: undefined