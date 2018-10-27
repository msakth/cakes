import reducer from '../reducers/cakeReducer';
import { ActionTypes } from '../constants/ActionTypes';

describe('cake reducer', () => {

    const initialState = {
      cakes: [],
      error: null
    };

    it('should return the initial state for an action not matched', () => {
        expect(reducer( initialState, { type:'dummy'})).toEqual(
          {
            cakes: [],
            error: null
          }
        )
      });

    it( 'should handle RECEIVE_CAKES_DATA', () => {
        expect( reducer( [],
              {
                type: ActionTypes.receiveCakeActions.RECEIVE_CAKES_DATA,                
                cakes: [{name: "amond cake", comments:'yummy'}, {name: 'clue cake', comments: 'super yummy'}],
                error: null 
                
              }
            )).toEqual(
              {
                cakes: [{name: "amond cake", comments:'yummy'}, {name: 'clue cake', comments: 'super yummy'}],
                error: null
              })
    });

    it( 'should handle RECEIVE_ERROR', () => {
        expect( reducer( [],
              {
                type: ActionTypes.receiveError.RECEIVE_ERROR,
                error: 'error occurred'
                
              }
            )).toEqual(
              {
                error: 'error occurred'
              })
    });

    it( 'should handle RECEIVE_CAKE', () => {
      expect( reducer( {cakes:[{name:"some cake", comments: "yummy cake"}]},
            {
              type: ActionTypes.receiveCakeActions.RECEIVE_CAKE,
              cake: [{name: "amond cake", comments:'yummy'}],
              error: null
              
            }
          )).toEqual(
            {
              cakes: [{name:"some cake", comments: "yummy cake"}, {name: "amond cake", comments:'yummy'}],
              error: null
            })
  });
});
  