import React, { Component } from 'react'
import { View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native'

export default class CardDisplay extends Component{
    render(){
        const {title,id,image} = this.props.data
        return(
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={{uri:image}} />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height:150,
        borderColor:'grey',
        shadowOffset:{ width: 1, height: 1},
        shadowColor: 'grey',
        shadowOpacity: 0.6,
        elevation: 1,
        margin:5
    },
    image:{
        height: 100
    },
    text:{
        fontSize:18,
        color:'black',
        textAlign:'center',
    }
})