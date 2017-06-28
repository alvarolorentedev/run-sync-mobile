import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import { Actions, Router, Scene } from 'react-native-router-flux';

import dummy from './dummy-view'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true} tabs={false} >
        <Scene key="tabbar" tabs={false} hideNavBar={true} initial>
            <Scene key='test' component={dummy} title="Test" initial/>
        </Scene>
     </Scene>
     
);

class AppContainer extends Component {
render() {
        return <RouterWithRedux  {...this.props} scenes={scenes}/>
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(AppContainer);