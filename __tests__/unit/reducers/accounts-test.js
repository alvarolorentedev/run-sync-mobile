import * as accounts from '../../../app/reducers/accounts'
import * as types from '../../../app/actions/types'

describe('reducers for accounts', () => {

  it('state validated is true when ADD_ACCOUNT', () => {
    expect(accounts.validated(false,{type: types.ADD_ACCOUNT})).toBeTruthy()
  })

  it('state validated is false when FAIL_ADD_ACCOUNT', () => {
    expect(accounts.validated(false,{type: types.FAIL_ADD_ACCOUNT})).not.toBeTruthy()
  })

  it('reducer has validated state', () => {
    expect(accounts.default(undefined, {type:"FAKE"}).validated).toBeDefined()
  })

})