import React from 'react';
import Filter from '../pure/filter';
import { AuthService } from '../../services/axiosService';
import { useHistory } from 'react-router';

/**
 * Logo
 * @returns Logout button
 */
const LogoutButton = () => {
	const history = useHistory();
	const user = new AuthService();
	const logout = () => {
		user.logout();
		console.log("deleted", localStorage.getItem('user'))
		history.push('/login')
	}
	return (
		<button onClick={logout} className="bg-blue-500 ml-2 mt-3 hover:bg-blue-700 text-white py-2 px-4 rounded">
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
