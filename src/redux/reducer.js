import {INCREMENT} from "./types";
import { DECREMENT } from "./types";


const initialState = {
    counter : 0
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case INCREMENT : return{
            
            counter : state.counter + action.payload
        }
        case DECREMENT : return{
            
            counter : state.counter - action.payload
        }
        default : return state;
    }
}

export default reducer;