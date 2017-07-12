import { createReducer } from 'redux-create-reducer'
import * as types from '../actions/types'
import { combineReducers } from 'redux'

export const validated = createReducer(false , {
    [types.ADD_ACCOUNT](state, action) {
        return true
    },
    [types.FAIL_ADD_ACCOUNT](state, action) {
        return false
    }
})

export default combineReducers({ validated })