import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveTechnologies } from '../../features/technologies/technologiesSlice';
import { addFilter } from '../../features/filters/filtersSlice';


const Filter = () => {

	const dispatch = useDispatch();
	const technologies = useSelector(state => state.technologies[0])
	useEffect(() => {					
		dispatch(retrieveTechnologies()) 	
	}, []);

	const newFilter = e => {		
		for (let i = 0; i<technologies.length; i++) {
			if (e.target.value === technologies[i].nombre) {
				dispatch(addFilter(e.target.value))				
			}
		}
	}

	return (
		<div>
			<div className="text-center pt-5 pb-2">
				<h1 className="text-3xl text-white font-bold">Remote | OK</h1>
			</div>
			<div className="mx-auto w-min">
			<input onChange={e => newFilter(e)} className="p-3 rounded-full" list="options"></input>
			<datalist name="options" id="options">
				{technologies && technologies.map(item => (
					<option 
						className="cursor-pointer" 
						value={item.nombre}
						key={item.id}
					>
					</option>
				))}
				
			</datalist>
			</div>
		</div>
	);
}

export default Filter;
