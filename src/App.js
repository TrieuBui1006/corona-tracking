import React, { Component } from 'react'

//Components
import { Cards, Chart, CountryPicker } from './components'

//Styles
import Styles from './App.module.css'

//functions
import { fetchData } from './api'

class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state

    return (
      <div className={Styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App
