import React, { Component } from 'react'

//Components
import { Cards, Chart, CountryPicker } from './components'

import Styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
    console.log(country)
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={Styles.container}>
        <img src={coronaImage} className={Styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
