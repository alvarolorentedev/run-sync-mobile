import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Fab, Icon, Button, Form, Item, Label, Input } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export default class AddAccount extends Component {
    constructor(props){
        super(props)
        this.state = { username: '', password: '' };
    }

    render() {
        return (
            <Container> 
                {header("Add Account")}
                <View>
                     <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(text) => this.setState({ ... this.state , username : text})}  />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({ ... this.state , username : text})} />
                        </Item>
                    </Form>
                    <Button onPress={() => this.props.addAccount(this.state)}><Text>Add</Text></Button>
                </View>
            </Container>
        );
    }
}