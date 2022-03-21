import React, { useReducer } from 'react';

//step 2 define the initial state and the reducer function
const initialState = 0;
//reducer function takes state and action. it returns state
const reducer = (state, action) => {
    switch (action)
    {
        case 'increment':
            return state + 1;
        case 'decriment':
            return state - 1;
        case 'reset':
            return state = 0;
        default:
            return state;

    }

}

//First step - define usereducer. use reducer takes reducer function and initial state of the app. and it returns curnt state and dispatch method
const [ count, dispatch ] = useReducer(reducer, initialState);

function ReducerExample() {
    return <div>
        <button onClick={()=>dispatch'}>increment</button>
    </div>;
}

export default ReducerExample;
