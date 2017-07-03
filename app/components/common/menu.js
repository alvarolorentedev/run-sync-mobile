import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'

import { Fab, Icon, Button } from 'native-base'
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
                position="bottomRight"
                onPress={() => this.props.toggleMenu()}>
                <Icon name="md-more" />
                <Button>
                    <Icon name="md-settings" onPress={ () =>{
                        this.props.toggleMenu()
                        Actions.settings()
                        }} />
                </Button>
                <Button>
                    <Icon name="md-add" onPress={ () =>{
                        this.props.toggleMenu()
                        Actions.addAcount()
                        }} />
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