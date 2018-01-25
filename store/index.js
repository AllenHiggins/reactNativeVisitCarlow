import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const store = createStore(reducers,applyMiddleware(promise(), thunk, createLogger()))

export default store