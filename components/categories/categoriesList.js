import React, { Component } from 'react'
import { View,Text } from 'react-native'

import CardDisplay from '../card/card'

export default class CategoriesList extends Component{
    render(){
        const { list } = this.props
        return(
            <View>
                <Text>LIST</Text>
                {
                    list.map((item,index) =>{
                        return(
                            <View key={index}>
                                 <CardDisplay
                                    data={item}
                                />
                            </View>
                        )    
                    })
                }
            </View>
        )
    }
}