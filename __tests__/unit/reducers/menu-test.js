import { active } from '../../../app/reducers/menu'
import * as types from '../../../app/actions/types'

it('ToggleMenu invertets existing value of false', () => {
  expect(active(false,{type: types.TOGGLE_MENU})).toBeTruthy()
})


it('ToggleMenu invertets existing value of true', () => {
  expect(active(true,{type: types.TOGGLE_MENU})).not.toBeTruthy()
})