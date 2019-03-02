import * as actionTypes from '../action';

const initialState = {
    counter: 0
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT: return{
            ...state,
            counter: state.counter + 1
        }
        case actionTypes.DECREMENT: return{
            ...state,
            counter: state.counter - 1
        }
        case actionTypes.ADD: return{
            ...state,
            counter: state.counter + action.amount
        }
        case actionTypes.SUBTRACT: return{
            ...state,
            counter: state.counter - action.amount
        }
        
        default: return state;
    }
    }
    

export default reducer;