import index from '../../../app/reducers'

describe('reducers have been combined in index', () => {
    it('reducer has menu state', () => {
    expect(index(undefined, {type:"FAKE"}).menu).toBeDefined()
    })

    it('reducer has accounts state', () => {
    expect(index(undefined, {type:"FAKE"}).accounts).toBeDefined()
    })
})