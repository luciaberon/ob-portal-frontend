import React, { useEffect } from 'react';
import Job from './job';
import { getAllOffers } from '../../services/axiosService';

const JobsList = () => {

    const [ offers, setOffers ] = useState([])

    useEffect(async() => {
        const arr = await getAllOffers();
        setOffers(offers);
        
    }, [])

    return (
        <div>
 
        </div>
    );
}

export default JobsList;
