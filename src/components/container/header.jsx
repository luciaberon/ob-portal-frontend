import React from 'react';
import Filter from '../pure/filter';

/**
 * Logo
 * @returns Logo of the website
 */
const LogoHeader = () => {
	return(
		<div className="flex-none w-auto">
			<h1 className="text-black text-xl sm:text-2xl italic">Portal de <strong>Empleo</strong></h1>
		</div>
	)
}


/**
 * Main Navigation
 * @returns List of links of the website navigation
 */
const NavbarHeader = () => {
	return(
		<div className="flex-none mx-10">
			<ul className='grid grid-cols-2 text-right'>
				<li className="mx-5">
					<a href>Enlace 1</a>
				</li>
				<li className="mx-5">
					<a href>Enlace 1</a>
				</li>
			</ul>
		</div>
	)
}


const Header = () => {
	return (
		<header>
			<nav>
			<div className="flex items-center justify-between flex-nowrap bg-teal p-6">
				<LogoHeader></LogoHeader>
				<NavbarHeader></NavbarHeader>
			</div>
			<Filter></Filter>
			</nav>
		</header>
	);
}

export default Header;
