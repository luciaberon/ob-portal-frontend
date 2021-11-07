import React from 'react';
import Filter from '../pure/filter';
import { logout } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

/**
 * Logo
 * @returns Logout button
 */
const LogoutButton = () => {
	const dispatch = useDispatch();

	const logoutUser = () => {
		dispatch(logout());						
	}
	
	return (
		<button onClick={logoutUser} className="bg-blue-500 ml-2 mt-3 hover:bg-blue-700 text-white py-2 px-4 rounded">
		Logout
		</button>
	)
}

const Header = () => {
	return (
		<header className="bg-landscape pb-10 mb-5">
			<LogoutButton />
			<Filter></Filter>	
		</header>
	);
}

export default Header;
