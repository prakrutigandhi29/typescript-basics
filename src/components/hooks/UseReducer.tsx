import { useReducer } from "react"

type StateTypes={
    count:number
}
type UpdateAction={
    type:'increment'|'decrement',
    payload:number
}
type Reset={
    type:'reset'
}
type ActionType=UpdateAction|Reset;
const initialState={count:0};
const reducer=(state:StateTypes,action:ActionType)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+action.payload}
        case 'decrement':
            return {count:state.count-action.payload}
        case 'reset':
            return initialState
        default:
            return state;
    }
}
export const UseReducer=()=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        
        <>
            Count:{state.count}
            <button onClick={()=>{dispatch({type:'increment',payload:10})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'decrement',payload:10})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        </>
    )
}