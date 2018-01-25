import React, { Component } from 'react'
import { View,Text } from 'react-native'

import CardDisplay from '../card/card'

export default class CategoriesList extends Component{
    render(){
        return(
            <View>
                <Text>Category List</Text>
                <CardDisplay />
            </View>
        )
    }
}