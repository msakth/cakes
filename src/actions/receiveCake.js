import {ActionTypes} from '../constants/ActionTypes';

export const receiveCake = (cake) => {
    return {
        type: ActionTypes.receiveCakeActions.RECEIVE_CAKE,
        cake
    };
  }