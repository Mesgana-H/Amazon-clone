import React, { useContext, createContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (StateContext.Provider value = { useRducer(reducer, initialState) } >{children})