import {receiveError} from './errorActions';
import {receiveCake} from './receiveCake';
import axios from 'axios';

  export const CreateCake =  (url, cake) => {
    const {name, comment, imageUrl, yumFactor} = cake;    
   
    return (dispatch) => {
      return axios.post(url, {
          name: name,
          comment: comment,
          imageUrl: imageUrl,
          yumFactor: yumFactor
      })
      .then(response => {         
        dispatch(receiveCake(response.data));
      })
      .catch(err => {        
        dispatch(receiveError(err.message));
      });
  }
}