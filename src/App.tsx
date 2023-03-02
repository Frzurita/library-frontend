import React from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import history from './helpers/history'
import 'normalize.css'
import LandingPage from './views/LandingPage/index'
import Login from './views/Login/index'
import Signup from './views/Signup/index'
import { useTheme } from '@material-ui/core/styles'
import { adminPanelRoutes } from './routes/Routes'

const App = () => {
  useTheme()
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          <Switch>
            {adminPanelRoutes.map((route, index) => (
              <Route
                history={history}
                key={index}
                path={route.path}
                exact={false}
              >
                <route.main />
              </Route>
            ))}
            <Route history={history} path="/" exact={true}>
              <LandingPage />
            </Route>
            <Route history={history} path="/login" exact={true}>
              <Login />
            </Route>
            <Route history={history} path="/signup" exact={true}>
              <Signup />
            </Route>
          </Switch>
        </Router>
      </React.Suspense>
    </RecoilRoot>
  )
}

export default App
