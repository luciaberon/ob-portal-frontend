import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JobDetailspage from './pages/jobs/JobDetailspage';
import Jobspage from './pages/jobs/Jobspage';
import Notfoundpage from './pages/404/Notfoundpage';


function AppRouting() {


  return (
    <Router>
        {/* Route Switch */}
        <Switch> 
            {/* Empty Route */}
            <Route exact path="/">
                <h1>Bienvenidos al proyecto de React de Open Bootcamp</h1>
            </Route>
            {/* Job details Route */}
            <Route exact path='/ofertas/:id' component={ JobDetailspage} />
            {/* Jobs Route */}
            <Route path='/ofertas' component={ Jobspage } />

            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
        </Switch>

    </Router>
  );
}

export default AppRouting;
