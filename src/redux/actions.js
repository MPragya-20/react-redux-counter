import { DECREMENT, INCREMENT } from "./types"

export const CounterActionInc = () =>{
    return {
        type :INCREMENT,
        payload:5
    }
}
export const CounterActionDec = () =>{
    return {
        type :DECREMENT,
        payload:5
    }
}
