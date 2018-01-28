import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'

import Category from './components/categories'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Category />
      </Provider>
    );
  }
}