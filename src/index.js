import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import reducers from 'reducers'
import App from 'components/App'
import 'styles/reset.css'
import 'styles/typography.css'
import 'styles/global.css'

let store = null

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducers, {}, applyMiddleware(reduxThunk))
} else {
  store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(reduxThunk))
  )
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
