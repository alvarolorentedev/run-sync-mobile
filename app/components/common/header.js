import React from 'react'
import { Header, Title, Body } from 'native-base'

export default function header(name){
    return  <Header>
                <Body>
                    <Title>{name}</Title>
                </Body>
            </Header>
}