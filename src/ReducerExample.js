import React, { useReducer } from 'react';

//step 2 define the initial state and the reducer function
const initialState = 0;
//reducer function takes state and action. it returns state
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return (state = 0);
		default:
			return state;
	}
};

//First step - define usereducer. use reducer takes reducer function and initial state of the app. and it returns curnt state and dispatch method

function ReducerExample() {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => dispatch('increment')}>increment</button>
			<button onClick={() => dispatch('decrement')}>decrement</button>
			<button onClick={() => dispatch('reset')}>reset</button>
		</div>
	);
}

export default ReducerExample;
