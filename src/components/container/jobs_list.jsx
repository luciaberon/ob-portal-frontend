import { useEffect } from 'react';
import Job from './job';
import { retrieveOffers } from '../../features/offers/offersSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';

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
        <>
            <Header></Header>
            <span className="ml-56 font-bold text-xl">Filters: ***</span>
            { offers && offers.map((offer) => {
                return (
                    <Job
                        offer={offer}
                        key={offer.id} 
                    />
                )})
            }
        </>
    );
}

export default JobsList;
