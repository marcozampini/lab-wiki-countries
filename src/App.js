// src/App.js

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import countries from './countries.json'

function App() {
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
