import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/container/header'

import Jobspage from './pages/jobs/Jobspage';
import Notfoundpage from './pages/404/Notfoundpage';
import JobDetailspage from './pages/jobs/JobDetailspage';


function AppRouting() {


  return (
    <Router>
        {/* Route Switch */}
        <Switch> 
            {/* Empty Route */}
            <Route exact path="/">
                <div className="bg-gray-100"><Header></Header></div>
            </Route>
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
