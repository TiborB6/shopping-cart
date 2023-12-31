import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './router'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
)
