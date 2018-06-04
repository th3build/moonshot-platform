import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PageOneComponent from './PageOneComponent'
import PageTwoComponent from './PageTwoComponent'

export default class RootComponent extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/two' component={PageTwoComponent}/>
            <Route component={PageOneComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
