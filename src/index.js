import React from 'react'
import ReactDOM from 'react-dom'
import styles from './css/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <h1> Hello Webpack! </h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
