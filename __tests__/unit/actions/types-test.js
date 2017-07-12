import * as types from '../../../app/actions/types'
describe('check on types', () => {
  it('type TOGGLE_MENU has string TOGGLE_MENU', () => {
    expect(types.TOGGLE_MENU).toBe("TOGGLE_MENU")
  })

  it('type ADD_ACCOUNT has string ADD_ACCOUNT', () => {
    expect(types.ADD_ACCOUNT).toBe("ADD_ACCOUNT")
  })

    it('type FAIL_ADD_ACCOUNT has string FAIL_ADD_ACCOUNT', () => {
    expect(types.FAIL_ADD_ACCOUNT).toBe("FAIL_ADD_ACCOUNT")
  })
})