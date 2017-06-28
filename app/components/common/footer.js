import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

export default function footer(current){
    return  <Footer>
                <FooterTab>
                    <Button vertical onPress={Actions.run} active={current === "Runs"} >
                        <Icon name='ios-walk' />
                        <Text>Runs</Text>
                    </Button>
                    <Button vertical onPress={Actions.settings} active={current === "Settings"}>
                        <Icon name='ios-settings' />
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
}