import {receiveError} from './errorActions';
import {receiveCakesData} from './receiveCakesAction';

import axios from 'axios';

export const fetchCakesAync =  (url) => {
    return (dispatch) => {
      return axios.get(url)
      .then(response => {        
        dispatch(receiveCakesData(response.data));
      })
      .catch(err => {
        dispatch(receiveError(err.message));
      });
  }
}

export const fetchCakeAsync = (id) => {
  return (dispatch, getState) => {
    const cakes = getState().CakeReducer.cakes;    
    return cakes.filter(cake => cake.id === id)[0];    
  };
}

