import React from 'react';
import Filter from '../pure/filter';

/**
 * Logo
 * @returns Logo of the website
 */
// const LogoHeader = () => {
// 	return(
// 		<div className="flex-none w-auto">
// 			<h1 className="text-white text-xl sm:text-2xl italic">Portal de <strong>Empleo</strong></h1>
// 		</div>
// 	)
// }


const Header = () => {
	return (
		<header className="bg-landscape pb-5 mb-5">
			<div>
				<Filter></Filter>
			</div>
		
		</header>
	);
}

export default Header;
