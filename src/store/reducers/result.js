import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT: return{
            ...state,
            results: state.results.concat({ val: action.result , id: new Date()})
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