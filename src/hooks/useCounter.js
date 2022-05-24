// Un custom Hook no es mas que una simple funcion

import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (factor = 1) => {
        setState (state + factor)

    }

    const decrement = (factor = 1) => {
        setState (state - factor)
     }

    const reset = () => {
        setState(initialState)
    }

     //Devuelvo como objeto mi state, y mis funciones
     return {
         state,
         increment,
         decrement,
         reset
     };
}