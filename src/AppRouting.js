import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/container/header'

import JobDetailspage from './pages/jobs/JobDetailspage';
import Jobspage from './pages/jobs/Jobspage';
import Notfoundpage from './pages/404/Notfoundpage';
import Job from './components/container/job';


function AppRouting() {


  return (
    <Router>
        {/* Route Switch */}
        <Switch> 
            {/* Empty Route */}
            <Route exact path="/">
                <div className="bg-gray-100"><Header></Header></div>
            </Route>

            {/* Temporary route to see job component */}
            <Route exact path="/offer"><Job></Job></Route>
            {/* Job details Route */}
            <Route exact path='/ofertas/:id' component={ JobDetailspage } />
            {/* Jobs Route */}
            <Route path='/ofertas' component={ Jobspage } />

            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
        </Switch>

    </Router>
  );
}

export default AppRouting;
