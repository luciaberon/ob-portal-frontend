import { useEffect, useState} from 'react';
import Job from './job';
import { retrieveOffers } from '../../features/offers/offersSlice';
import { removeFilter } from '../../features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header';

/**
 * JobsList
 * @returns List of all job offers
 */
const JobsList = () => {
    let offers = useSelector(state => state.offers[0]);
    let filters = useSelector(state => state.filters) ;
    const [list,setList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveOffers());    
        setList(offers)
    }, []);  

    useEffect(() => {
        setList(offers)
    }, [offers]);

    useEffect(() => {
        const filteredList = filterList();
        setList(filteredList);
    }, [filters]);

    const deleteFilter = (item) => {
        dispatch(removeFilter(item));        
    }

    const filterList = () => {
        let arr = [];
        if (offers && filters.length !== 0) {
            arr = offers.filter(item => {
                let coincidences = 0;
                for (let j = 0; j<filters.length; j++) {                    
                    for (let i = 0; i<item.tecnologias.length; i++) {
                        if (item.tecnologias[i].nombre === filters[j]) {
                            coincidences = coincidences + 1;
                        } 
                    } 
                }
                if (coincidences === filters.length) {
                    return true;
                }
                return false;                   
            })
        return arr;
        
        } else {
            return offers;
        }
    }

    return (
        <>
            <Header></Header>
            <div>
                <span className="text-xl ml-52 mr-4">Incluir:</span>     
                {
                    filters && filters.map((item,index) => 
                        <span 
                            key={index}
                            onClick={() => deleteFilter(item)}
                            className="inline-flex items-center cursor-pointer justify-center px-2 py-1 mr-2 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {item} &#10005;
                        </span>
                    )
                }
            </div>
            { list && list.map((offer) => {
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
