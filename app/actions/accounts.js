import * as types from './types'
import { authenticate } from 'endomondo-unofficial-api'

export function addAccount(info){
    return (dispatch) => {
        dispatch({ type: types.TEST_ACCOUNT })
        return authenticate({email: info.email, password: info.password})
        .then((result) => dispatch({ type: types.ADD_ACCOUNT }))
        .catch((result) => dispatch({ type: types.FAIL_ADD_ACCOUNT }))
    }
}