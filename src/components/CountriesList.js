import React from 'react'
import CountryItem from './CountryItem'
import './CountriesList.css'

const CountriesList = (props) => {
  return (
    <div className="col-5 countries-column">
      <div className="list-group">
        {props.countries.map((country) => (
          <CountryItem
            key={country.alpha3Code}
            a2c={country.alpha2Code}
            a3c={country.alpha3Code}
            name={country.name.common}
          />
        ))}
      </div>
    </div>
  )
}

export default CountriesList
