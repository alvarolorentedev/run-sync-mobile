import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Container, Fab, Icon, Button } from 'native-base'
import { connect } from 'react-redux'

class Menu extends Component {
    constructor(props) {
        super(props)
        props.toggleMenu()
    }

    render(){
        return(
            <Fab
                active={this.props.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.props.toggleMenu()}>
                <Icon name="share" />
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                </Button>
          </Fab>
        );
    }
}

function mapStateToProps(state){
    return {
        active: state.menu.active
    }
}

export default connect(mapStateToProps)(Menu);