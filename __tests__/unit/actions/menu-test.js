import * as menuActions from '../../../app/actions/menu'
import * as types from '../../../app/actions/types'

it('menu toogle generates Action of type TOGGLE_MENU', () => {
  expect(menuActions.toggleMenu().type).toBe(types.TOGGLE_MENU)
})