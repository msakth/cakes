import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ActionTypes } from '../constants/ActionTypes';
import { fetchCakesAync } from '../actions/fetchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch action', () => {

    it('should create receiveCakesData action when fetching cakes has been done',() => {
        const expectedActions = [
            {   type: ActionTypes.receiveCakeActions.RECEIVE_CAKES_DATA,
                cakes:  [{"name": "firstCake"}, {"name": "secondCake"}]
            }
          ];

          const store = mockStore({ cakes: [] })

        return store.dispatch(fetchCakesAync()).then(() => {

      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });

    });
})