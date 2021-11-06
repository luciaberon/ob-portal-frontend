import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Jobspage from './pages/jobs/Jobspage';
import Notfoundpage from './pages/404/Notfoundpage';
import JobDetailspage from './pages/jobs/JobDetailspage';
import Loginpage from './pages/auth/Loginpage';
import Registerpage from './pages/auth/Registerpage';


function AppRouting() {

  const loggedIn = localStorage.getItem('user');

  return (
    <Router>
        {/* Route Switch */}
        <Switch> 
            {/* Redirections to protect our routes */}
            <Route exact path='/'>
              {
                loggedIn ? 
                (<Redirect from='/' to='/ofertas' />)
                :
                (<Redirect from='/' to='/login' /> )
              }
            </Route>
            {/* Login  */}
            <Route exact path="/login" component={Loginpage} />
            {/* Register  */}
            <Route exact path="/register" component={Registerpage} />

            {/* Individual Job Route */}
            <Route 
              path='/ofertas/:id'
              render = {
                ({match}) => (<JobDetailspage id={match.params.id} />)
              }
            >
            </Route>
            {/* Jobs Route */}
            <Route path='/ofertas' component={ Jobspage } />
            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
        </Switch>
    </Router>
  );
}

export default AppRouting;
