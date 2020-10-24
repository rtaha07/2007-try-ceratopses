import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './components/Home'

ReactDom.render(
    <Provider store={ store }>
        <Home />
    </Provider>,
    document.querySelector('#root')
)