// Youssef Selkani
// Protobulb.io
// 2018

import React, { Component } from 'react'
import { Button, Alert, Jumbotron } from 'reactstrap'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      class: '',
      modal: false
    }
  }

  componentDidMount = () => {
    var mode = localStorage.getItem('mode')
    if (mode) {
      this.setState({ class: mode })
    } else {
      this.setState({ class: 'default' })
    }
  }

  switch = () => {
    var mode = localStorage.getItem('mode')
    if (mode === 'lightMode') {
      localStorage.setItem('mode', 'nightMode')
      this.setState({ class: 'nightMode' })
    } else {
      localStorage.setItem('mode', 'lightMode')
      this.setState({ class: 'lightMode' })
    }
  }

  render () {
    return (
      <div className='App'>
        <div className={this.state.class}>
          <h1>LocalStorage DarkMode 🌗</h1>
          <h6>Reload this page!</h6>
          <hr />[ this.state.{this.state.class} ]
          <Button className='mt-5 mb-5 pl-5 pr-5' onClick={this.switch} color='primary' active>
            Switch
          </Button>
          <Button href='https://github.com/usfslk/ReactDarkMode' color='link'>
            Source
          </Button>
          <div style={{ maxWidth: '80vh', textAlign: 'justify', margin: '5vh' }}>
            <h6>
              Flip any React apps to dark mode, it's easier on the eyes, better for
              night-time browsing and in some cases, helpful with battery life.
            </h6>
            <hr />

            <li>Lorem ipsum dolor sit amet</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
          </div>
          <Alert color='light'>
            <h6>
              Build a native mobile app in a fraction of the time and cost at{' '}
              <a className='alert-link' href='https://murkstom.com/?utm_source=darkmode'>
                murkstom.com
              </a>
            </h6>
          </Alert>
        </div>
      </div>
    )
  }
}

export default App
