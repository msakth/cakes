import { ActionTypes } from '../constants/ActionTypes';

const initialState = {
  cakes: [],
  error: null
};

export default function CakeReducer(state = initialState, action) {
  
  switch (action.type) {
    
    case ActionTypes.cakeListTypes.LIST_CAKES_SUCCESS:

    return Object.assign({}, state, { cakes: action.cakes });
      // return {
      //   ...state,
      //   error: null,
      //   cakes: action.cakes
      // };
    case ActionTypes.cakeListTypes.LIST_CAKES_FAILURE:
      return Object.assign({}, state, { error: action.error });
      // return {
      //   ...state,
      //   error: action.error
      // };
    default:
      return state;
  }
}