import React from 'react';
import JobDetails from '../../components/container/job_details';

const JobDetailspage = ({id}) => {
    console.log("ID",id)
    return (
        <JobDetails id={id}/>
    );
}

export default JobDetailspage;
