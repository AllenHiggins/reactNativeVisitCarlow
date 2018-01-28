import React, { Component } from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'

export default class CardDisplay extends Component{
    render(){
        const {title,id,image} = this.props.data
        return(
            <TouchableOpacity>
                <Image 
                    style={{width: 50, height: 50}} 
                    source={{uri:image}}
                />
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
}