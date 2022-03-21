import React, { useReducer } from 'react';

//First step - define usereducer. use reducer takes reducer function and initial state of the app. and it returns curnt state and dispatch method
const [ count, dispatch ] = useReducer(reducer, initialState);
//step 2 define the initia state and the action

function ReducerExample() {
	return <div>ReducerExample</div>;
}

export default ReducerExample;
