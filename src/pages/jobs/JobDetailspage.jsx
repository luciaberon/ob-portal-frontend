import React from 'react';
import { useHistory } from 'react-router-dom';
import JobDetails from '../../components/container/job_details';

/**
 * Delivers the Job details component with its id
 * @param {get the id of the job} param0 
 * @returns the "single page" job
 */
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
