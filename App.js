import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

import CategoriesList from './components/categories/categoriesList'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CategoriesList />
      </Provider>
    );
  }
}