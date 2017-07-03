import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Fab, Icon, Button, Form, Item, Label, Input } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export default class AddAccount extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container> 
                {header("Add Account")}
                <View>
                     <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                </View>
            </Container>
        );
    }
}