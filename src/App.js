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

  if (countries.length === 0) {
    return <div className="loading">Loading...</div>
  }
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
                  <div className="col-7">
                    No country selected. Please select a country.
                  </div>
                }
              />
              <Route
                path="/countries/:countryId"
                element={<CountryDetails countries={countries} />}
              />
              <Route
                path="*"
                element={
                  <div className="col-7">
                    The requested page doesn't exist. Please select a country
                    from the list.
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
export default App
