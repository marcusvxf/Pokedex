import React , {useReducer,useMemo } from 'react';
import reducer from './reducers/pokemonReducer';

const initialState = { pokemon: 'inicial', def: false ,favorites: [ ],cards:''}

const firstContext = React.createContext()

const Store = (props)=> {
    const [state,dispatch] = useReducer(reducer,initialState)

    const contextValue = useMemo(() => {
        return { state, dispatch };
      }, [state, dispatch]);

    return(
        <firstContext.Provider value={contextValue}>
            {props.children}
        </firstContext.Provider>
    )
}

export { firstContext,Store }

