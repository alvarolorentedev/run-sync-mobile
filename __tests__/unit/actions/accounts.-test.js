import * as accountsActions from '../../../app/actions/accounts'
import * as types from '../../../app/actions/types'

it('add account generates Action of type ADD_ACCOUNT', () => {
  expect(accountsActions.addAccount().type).toBe(types.ADD_ACCOUNT)
})