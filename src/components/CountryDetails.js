import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './CountryDetails.css'

const CountryDetails = (props) => {
  let { countryId } = useParams()

  const country = props.countries.find(
    (oneCountry) => oneCountry.alpha3Code === countryId
  )
  if (country === undefined) {
    return (
      <div className="col-7">
        The country code is not correct. Please check the code or select a
        country from the list.
      </div>
    )
  }
  const borderingCountries = props.countries.filter((oneCountry) =>
    country.borders.includes(oneCountry.alpha3Code)
  )

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderingCountries.map((borderingCountry) => (
                  <li key={borderingCountry.alpha3Code}>
                    <Link to={'/countries/' + borderingCountry.alpha3Code}>
                      {borderingCountry.name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails
