import { combineReducers } from 'redux'
import menu from './menu'
import accounts from './accounts'

export default combineReducers({
    menu,
    accounts
});