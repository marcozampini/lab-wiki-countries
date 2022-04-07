import { Link } from 'react-router-dom'

const CountryItem = (props) => {
  return (
    <Link
      className="list-group-item list-group-item-action"
      to={'/' + props.a3c}
    >
      <img
        className="country-flag"
        src={
          'https://flagpedia.net/data/flags/icon/72x54/' +
          props.a2c.toLowerCase() +
          '.png'
        }
        alt={props.name}
      />
      &nbsp;
      {props.name}
    </Link>
  )
}

export default CountryItem
