import React from 'react'
import ReactDOM from 'react-dom'

// RootComponent is the entry point for this application
import RootComponent from './components/RootComponent'

// Render function
function run () {
  ReactDOM.render(
    <RootComponent/>,
    document.getElementById('react-root')
  )
}

// Only run application when DOM is one of these states
const loadedStates = ['complete', 'loaded', 'interactive']
if (loadedStates.includes(document.readyState) && document.body) {
  run()
} else {
  window.addEventListener('DOMContentLoaded', run, false)
}
