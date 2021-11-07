import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Jobspage from './pages/jobs/Jobspage';
import Notfoundpage from './pages/404/Notfoundpage';
import JobDetailspage from './pages/jobs/JobDetailspage';
import Loginpage from './pages/auth/Loginpage';
import Registerpage from './pages/auth/Registerpage';


function AppRouting() {

  const auth = useSelector(state => state.auth.isLoggedIn);

  return (
    <HashRouter>
        {/* Route Switch */}
        <Switch> 
            <ProtectedRoute exact path="/" component={ Jobspage } auth={auth} />
            {/* Login */}
            <ProtectedAuth path="/login" component={Loginpage} auth={auth} />
            {/* Register  */}
            <ProtectedAuth path="/register" component={Registerpage} auth={auth} />

            {/* Individual Job Route */}
            <Route 
              path='/ofertas/:id'
              render = {
                ({match}) => (<JobDetailspage id={match.params.id} />)
              }
            >
            </Route>
            {/* Jobs Route */}
            <ProtectedRoute path="/ofertas" component={ Jobspage } auth={auth} />
            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
        </Switch>
    </HashRouter>
  );
}

const ProtectedRoute = ({auth,component:Component,...rest}) => {  
  return (
    <Route
    {...rest}
    render={() => auth ? (
      <Component />
    ): 
      (
        <Redirect to="/login" />   
      )
    }
    />
  )
}

const ProtectedAuth = ({auth,component:Component,...rest}) => {
  return (
    <Route
    {...rest}
    render={() => !auth ? (
      <Component />
    ): 
      (
        <Redirect to="/ofertas" />   
      )
    }
    />
  )
}
export default AppRouting;
