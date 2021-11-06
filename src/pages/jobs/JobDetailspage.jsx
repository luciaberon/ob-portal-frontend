import React from 'react';
import { useHistory } from 'react-router-dom';
import JobDetails from '../../components/container/job_details';

const JobDetailspage = ({id}) => {
    const history = useHistory()
    if (localStorage.getItem('user') === null) {
        history.push('/login');
    }
    return (
        <JobDetails id={id}/>
    );
}

export default JobDetailspage;
