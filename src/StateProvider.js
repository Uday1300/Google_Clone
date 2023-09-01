import React,{createContext,useContext,useReducer} from 'react'

export const StateContext = createContext() ;
export const StateProvider = ({reducer,initialState,children}) => {
  return (
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        { children }
        </StateContext.Provider>
  )
}

//Hook which allows us to pull information form data layer .
export const useStateValue = () => useContext(StateContext) ;
