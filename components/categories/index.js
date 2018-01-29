import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions/categoriesAction'
import ParallaxHeaderList from '../ParallaxHeader/ParallaxHeaderList'
class Category extends Component{
    constructor(props){
        super(props)
    }
   
    componentWillMount(){
       this.props.getCategories()
    }

    render(){
        return(
            <View>
                <ParallaxHeaderList
                    list={this.props.categories.list}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        actionCreators, dispatch
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories,
})

export default connect(mapStateToProps,mapDispatchToProps)(Category)