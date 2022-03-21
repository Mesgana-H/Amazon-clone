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
	const userInChild = useContext(userContext); //the value is abebe
	return (
		<div>
			<h1>{userInChild}</h1>
		</div>
	);
};
