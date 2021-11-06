import React from 'react'
import { useHistory } from 'react-router-dom';
import JobsList from '../../components/container/jobs_list'

/**
 * Jobspage
 * @returns JobsList component
 */
export default function Jobspage() {
    const history = useHistory();
    if (localStorage.getItem('user') === null) {
        history.push('/login');
    }
    return (
        <JobsList />
    )
}
