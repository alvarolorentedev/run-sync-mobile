import index from '../../../app/reducers'

it('reducer has menu state', () => {
   expect(index(undefined, {type:"FAKE"}).menu).toBeDefined()
})
