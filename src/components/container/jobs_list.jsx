import { useEffect } from 'react';
import Job from './job';
import { retrieveOffers } from '../../features/offers/offersSlice';
import { useDispatch, useSelector } from 'react-redux';

/**
 * JobsList
 * @returns List of all job offers
 */
const JobsList = () => {
    const offers = useSelector(state => state.offers[0]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveOffers());        
    }, []);  

    return (
        <div>
            { offers && offers.map((offer) => {
                return (
                    <Job 
                        offer={offer}
                            key={offer.id} 
                    />
                )})
            }
        </div>
    );
}

export default JobsList;
