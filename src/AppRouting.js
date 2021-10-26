import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/container/header'

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
                <Header></Header>
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
