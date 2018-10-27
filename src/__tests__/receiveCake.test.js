import {ActionTypes} from '../constants/ActionTypes';
import * as actions from '../actions/receiveCake';

describe('receiveCake actions', () => {
    it('should get receiveCake action when add a new cake', () => {
        const cake = {name:'first cake', comments: 'yummy'}
        const expectedAction = {
            type: ActionTypes.receiveCakeActions.RECEIVE_CAKE,
            cake            
          };
          expect(actions.receiveCake(cake)).toEqual(expectedAction);
    });
});