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

