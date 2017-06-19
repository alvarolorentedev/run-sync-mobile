import React , { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'

// import {persistStore, autoRehydrate, createTransform} from 'redux-persist'
// import immutableTransform from 'redux-persist-transform-immutable'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import AppContainer from './components/app-container'
// import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState){
    const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )//,
        // autoRehydrate()
    );
    return createStore(function(){}, initialState, enhancer);
}

const store = configureStore({});
// persistStore(store, {storage: AsyncStorage, transforms: [whitelistLocationTrackTransform, whitelistResourceCheckTransform, whitelistSelectedRunTransform, immutableTransform()]})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
    render(){ 
        return (
            <Provider store={store}>
                 <View style={styles.container}>
                    <Text style={styles.welcome}>
                    Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App