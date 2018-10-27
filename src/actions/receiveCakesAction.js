import {ActionTypes} from '../constants/ActionTypes';

export const receiveCakesData = (cakes) => {
    return {
        type: ActionTypes.receiveCakeActions.RECEIVE_CAKES_DATA,
        cakes
    };
  }