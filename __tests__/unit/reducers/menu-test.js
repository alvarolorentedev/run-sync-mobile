import * as menu from '../../../app/reducers/menu'
import * as types from '../../../app/actions/types'

it('ToggleMenu invertets existing value of false', () => {
  expect(menu.active(false,{type: types.TOGGLE_MENU})).toBeTruthy()
})


it('ToggleMenu invertets existing value of true', () => {
  expect(menu.active(true,{type: types.TOGGLE_MENU})).not.toBeTruthy()
})

it('reducer has active state', () => {
   expect(menu.default(undefined, {type:"FAKE"}).active).toBeDefined()
})