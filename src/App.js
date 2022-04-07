import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesData = async () => {
      const fetchData = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      )
      //console.log(fetchData.data)
      fetchData.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      setCountries(fetchData.data)
    }
    fetchCountriesData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="col-5 countries-column">
                    No country selected. Please select a country.
                  </div>
                }
              />
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
export default App
