import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'

// we need provider and store to connect redux with react application
import Store from './Components/Redux/Store'
import { Provider } from 'react-redux'
console.log('store:', Store);
createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
)

