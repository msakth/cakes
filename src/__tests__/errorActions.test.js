import {ActionTypes} from '../constants/ActionTypes';
import * as actions from '../actions/errorActions';

describe('error actions', () => {
    it('should get recieceError action when error occurred', () => {
        const expectedAction = {
            type: ActionTypes.receiveError.RECEIVE_ERROR,
            error: 'Error Occurred'
          };
          expect(actions.receiveError('Error Occurred')).toEqual(expectedAction);
    });
});