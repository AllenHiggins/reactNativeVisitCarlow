import React, { Component } from 'react'

import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    Animated 
} from 'react-native'
import { LinearGradient } from 'expo'
import CardDisplay from '../card/card'

export default class ParallaxHeaderList extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            scrollY: new Animated.Value(0),
        }
    }
      
    render(){
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
        })
        
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp'
        })

        const { list } = this.props

        return(
            <View> 
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}
                >
                <View style={styles.scrollViewContent}>
                    {
                        list.map((item,index) =>{
                            return(
                                <View key={index}  >
                                    <CardDisplay
                                        data={item}
                                    />
                                </View>
                            )    
                        })
                    }
                </View>
                </ScrollView>
                <Animated.View style={[styles.header, {height: headerHeight}]}>
                    <LinearGradient
                        colors={['#4D0000','#FF0000','#4D0000']}
                    >                    
                        <Animated.Image
                            style={[
                                styles.backgroundImage,
                                {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
                            ]}
                            source={require('../../assets/icon.png')}
                        />
                        <View style={styles.bar}>
                            <Text style={styles.title}>Title</Text>
                        </View>
                    </LinearGradient>
                </Animated.View>
            </View>
        )
    }
}

const HEADER_MAX_HEIGHT = 180
const HEADER_MIN_HEIGHT = 58
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        //backgroundColor: 'pink',
        overflow: 'hidden',
      },
      bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
      scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT+15,
      }
})