import React from 'react';

const Filter = () => {
	return (
		<div className="p-10">
			<div className="text-center">
				<h1 className="text-lg sm:text-xl">Search a job</h1>
			</div>
			<div class="w-full">
				<form>
					<div className="mb-4 w-full text-center">
						<input className="mx-auto shadow appearance-none border rounded w-64 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Look for..." />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Filter;
