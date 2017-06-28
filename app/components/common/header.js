import React from 'react'
import { Header, Title } from 'native-base'

export default function header(name){
    return  <Header>
                <Title>{name}</Title>
            </Header>
}