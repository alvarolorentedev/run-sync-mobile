import React , { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {persistStore, autoRehydrate, createTransform} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

import AppContainer from './components/app-container'
import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState){
    const enhancer = composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        autoRehydrate()
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
persistStore(store, {storage: AsyncStorage, transforms: [immutableTransform()]})

class App extends Component {
    render(){ 
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App