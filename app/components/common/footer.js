import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Footer, FooterTab, Button, Icon } from 'native-base'

export default function footer(current){
    return  <Footer>
                <FooterTab>
                    <Button transparent onPress={Actions.run} active={current === "Runs"} >
                        <Icon name='ios-walk' />
                        Runs
                    </Button>
                    <Button transparent onPress={Actions.settings} active={current === "Settings"}>
                        <Icon name='ios-settings' />
                        Settings
                    </Button>
                </FooterTab>
            </Footer>
}