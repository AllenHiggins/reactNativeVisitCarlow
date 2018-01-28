import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions/categoriesAction'
import CategoriesList from './categoriesList'

class Category extends Component{
    constructor(props){
        super(props)
    }
   
    componentWillMount(){
       this.props.getCategories()
       console.log("PROPS: ",this.props)
    }

    render(){
        return(
            <View>
                <Text>Index Screen</Text>
                <CategoriesList 
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