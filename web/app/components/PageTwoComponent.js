import React from 'react'
import { NavLink } from 'react-router-dom'

export default class PageTwoComponent extends React.Component {
  render () {
    return (
      <div>

        <h1>Second page.</h1>
        <p>
          This is a second page. Notice how the URL changed?
        </p>

        <p>
          <NavLink to='/'>Back to first page</NavLink>
        </p>

      </div>
    )
  }
}
