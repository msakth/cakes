import { ActionTypes } from '../constants/ActionTypes';
import axios from 'axios';

const fetchCakesSuccess = cakes => ({
  type: ActionTypes.cakeListTypes.LIST_CAKES_SUCCESS,
  cakes
});

const fetchCakesFailure = errorMessage => ({
  type: ActionTypes.cakeListTypes.LIST_CAKES_FAILURE,
  error: errorMessage
});

export const fetchCakesAync =  (url) => {

    return (dispatch) => {
      return axios.get(url)
      .then(response => {        
        dispatch(fetchCakesSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchCakesFailure(err.message));
      });
  }
}

