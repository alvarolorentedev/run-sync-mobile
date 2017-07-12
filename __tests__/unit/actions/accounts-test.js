jest.mock('endomondo-unofficial-api', () => ({
  authenticate: jest.fn()
}));

import { authenticate } from 'endomondo-unofficial-api'

import * as accountsActions from '../../../app/actions/accounts'
import * as types from '../../../app/actions/types'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('check on accounts', () => {

  it('add account when authenticates correctly for service', () => {
    authenticate.mockImplementation(() => Promise.resolve())
    const store = mockStore({ })
    const expectedActions = [
      { type: types.ADD_ACCOUNT }
    ]
    return store.dispatch(accountsActions.addAccount({email: "", password: ""})).then( () =>{
      expect(store.getActions()).toEqual(expectedActions);
    })
  })

  it('add account fails when authenticates fails for service', () => {
    authenticate.mockReturnValue(Promise.reject())
    const store = mockStore({ })
    const expectedActions = [
      { type: types.FAIL_ADD_ACCOUNT }
    ]
    return store.dispatch(accountsActions.addAccount({email: "", password: ""})).then( () =>{
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})
