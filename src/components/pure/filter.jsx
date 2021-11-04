import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveTechnologies } from '../../features/technologies/technologiesSlice';
import {filterOffer} from '../../features/offers/offersSlice'

const configureOptions = technologies => {
	for (let i = 0; i < technologies.length; i++) {
		tempOptions.push({
			"name": technologies[i].nombre,
		})
	}			
}
const tempOptions = [];


const Filter = () => {

	const dispatch = useDispatch();
	const [options, setOptions] = useState([])
    const technologies = useSelector(state => state.technologies[0]);

	const updateFilter = e => {
		for (let i = 0; i<options.length; i++) {
			if (options[i].name === e.target.value) {
				dispatch(filterOffer(e.target.value))
			}
		}
	}

	useEffect(() => {
		let arr = [];
		axios.get("https://proyecto-ofertas-ob.herokuapp.com/api/tecnologias")
		.then(res => {
			arr = res.data;
			configureOptions(arr);
			setOptions(tempOptions)
		})
		// dispatch(retrieveTechnologies())
		// .then(() => {
		// 	console.log(technologies)
		// 	console.log("Technologies",technologies)
		// 	configureOptions(technologies)
		// 	console.log("tempOptions",tempOptions)
		// 	setOptions(tempOptions)
		// 	console.log("Set options",options)
		// })
		//l
	}, []);

	return (
		<div>
			<div className="text-center pt-5 pb-2">
				<h1 className="text-3xl text-white font-bold">Remote | OK</h1>
			</div>
			<div className="mx-auto w-min">
			<input className="p-3 rounded-full" onInput={e => updateFilter(e)} list="options"></input>
			<datalist name="options" id="options">
				{
					options && options.map(option => {
						return (
							<option key={option.id} value={option.name}>
								{option.name}
							</option>
						)
					})
				}
			</datalist>
			</div>
		</div>
	);
}

export default Filter;
