import * as actionTypes from '../action/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedState = state.results.filter((result) => result.id !== action.resultElementId);
    return updateObject(state, {results: updatedState})
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT: 
            return updateObject(state, {results: state.results.concat({ val: action.result , id: new Date()})})
        case actionTypes.DELETE_RESULT: 
            return deleteResult(state, action)
        default: return state;
    }
    }
    

export default reducer;