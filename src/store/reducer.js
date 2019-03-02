import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT: return{
            ...state,
            results: state.results.concat({ val: state.counter, id: new Date()})
        }
        case actionTypes.DELETE_RESULT: 
        const updatedState = state.results.filter((result) => result.id !== action.resultElementId)
        return{
            ...state,
            results: updatedState
        }
        default: return state;
    }
    }
    

export default reducer;