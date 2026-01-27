import {useState, useEffect} from 'react'
import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'


const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
  axios
    .get(`${baseUrl}/all`)
    .then(response => {
      setCountries(response.data)
    })
}, [])

  const renderResults = () => {
    if (filteredCountries.length > 10) {
      return <p>{"Too many matches, specify another filter"}</p>
    }

    else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]

      return (
          <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>capital: {country.area}</p>
            <h2>Languages</h2>
            <ul>
            {Object.values(country.languages).map(language => 
            <li key={language}>{language}</li>
            )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
          </div>
        )}

    else {
    return (
    <div>
      {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)}
    </div>
    )
    }
     
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <form>
        find countries: <input value={value} onChange={handleChange} /> 
      </form>
      {renderResults()}
    </div>
  )

}

export default App
