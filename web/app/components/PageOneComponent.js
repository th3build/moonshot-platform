import React from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class PageOneComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '(loading)'
    }
  }

  async componentDidMount () {
    const response = await Axios.get('/example-endpoint')
    console.log(response)
    this.setState({
      name: response.data.name
    })
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Coming soon!</h1>
      </div>
    )

    const name = this.state.name
    return (
      <div>

        <h1>Hello!</h1>
        <p>
          This is a very simple example of how React apps work with
          Includable.
        </p>

        {/* Example 1: Routing */}
        <h3>Routing using <code>react-router</code></h3>
        <p>
          <NavLink to='/two'>Go to second page</NavLink>
        </p>

        {/* Example 2: API requests */}
        <h3>AJAX requests using <code>axios</code></h3>
        <p>Your name is: {name}</p>

        {/* Example 3: Translatable content */}
        <h3>Translations</h3>
        <p>Switch language: <a href="?locale=en_US">en_US</a> | <a href="?locale=nl_NL">nl_NL</a></p>
        <p>{S.translate('example.simple')}</p>
        <p>{S.translate('example.cool', [name])}</p>

      </div>
    )
  }
}
