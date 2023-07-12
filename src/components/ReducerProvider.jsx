import React, { createContext } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';

export const reducerContext = createContext();

const ReducerProvider = ( { children } ) => {

    const selectedItems = useSelector(store => store.selectedItems);
    const dispatch = useDispatch();
    
    return (
        <reducerContext.Provider value={{selectedItems, dispatch}}>
            { children }
        </reducerContext.Provider>
    );
};

export default ReducerProvider;