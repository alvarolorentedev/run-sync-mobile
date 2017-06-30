import { createReducer } from 'redux-create-reducer'
import * as types from '../actions/types'
import { combineReducers } from 'redux'
import { List , Map } from 'immutable'

export const active = createReducer(false , {
    [types.TOGGLE_MENU](state, action) {
        return !state
    }
})

export default combineReducers({ active })