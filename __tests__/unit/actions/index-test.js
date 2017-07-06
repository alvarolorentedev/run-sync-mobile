import { ActionCreators } from '../../../app/actions'

it('actions has toggleMenu Action', () => {
   expect(ActionCreators.toggleMenu).toBeInstanceOf(Function)
})

it('actions has addAccount Action', () => {
   expect(ActionCreators.addAccount).toBeInstanceOf(Function)
})