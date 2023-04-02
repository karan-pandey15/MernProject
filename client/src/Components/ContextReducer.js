import React, { createContext, useContext, useReducer } from 'react'

const CartStateConext   = createContext();
const CartDispatchContext      = createContext(); 

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD": 
        return [...state,{id:action.id,name:action.name, qty:action.qty, size: action.size, price:action.price ,img:action.img}]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        default :  console.log("Error in Reducer");
    }
}

export const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch} >
             <CartStateConext.Provider value={state} >
                  {children}
             </CartStateConext.Provider>
        </CartDispatchContext.Provider>
    )
} 

export const useCart = ()=> useContext(CartStateConext)
export const useDispatchCart = ()=> useContext(CartDispatchContext);
