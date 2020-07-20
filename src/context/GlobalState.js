import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial state

const initialState = {
    transaction: []
}

//Create Context

export const GlobalContext = createContext(initialState)

//Provider Component

export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions

    function deleteTransaction(id){
        dispatch({
            type:'DELETE',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={{transaction: state.transaction, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}