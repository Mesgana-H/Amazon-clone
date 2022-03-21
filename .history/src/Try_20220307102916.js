import React, { useContext, createContext, useState } from 'react';

const Try = () => {
	const userContext = createContext();

	const [ user, setUser ] = useState('abebe');

	return (
		<userContext.Provider value={user}>
			<Child user={user} />
		</userContext.Provider>
	);
};

const Child = () => {
	const user = useContext(useContext);
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};
