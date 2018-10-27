import { ActionTypes } from '../constants/ActionTypes';

const initialState = {
  cakes: [],
  error: null
};

export default function CakeReducer(state = initialState, action) {
  

  switch (action.type) {    
    case ActionTypes.receiveCakeActions.RECEIVE_CAKES_DATA:
      return Object.assign({}, state, { cakes: action.cakes, error: null });
      // return {
      //   ...state,
      //   error: null,
      //   cakes: action.cakes
      // };
    case ActionTypes.receiveError.RECEIVE_ERROR:
      return Object.assign({}, state, { error: action.error });
      // return {
      //   ...state,
      //   error: action.error
      // };
    case ActionTypes.receiveCakeActions.RECEIVE_CAKE:
    //ToDoMS: add in reverse order so the new cake appears top in the list.
      // return {
      //   ...state,
      //   error: null,
      //   cakes: [action.cake, ...state.cakes]
      // };
      return Object.assign({}, state, { cakes: state.cakes.concat(action.cake), error: null });

    default:
      return state;
  }
}