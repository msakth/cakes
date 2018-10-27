import {ActionTypes} from '../constants/ActionTypes';

export const receiveError = (error) => {
    return {
      type: ActionTypes.receiveError.RECEIVE_ERROR,      
      error
    };
  }