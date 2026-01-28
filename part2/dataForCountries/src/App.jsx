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



  const handleShowCountry = (country) => {
    setValue(country.name.common)
  }

  const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const weatherKey = import.meta.env.VITE_WEATHER_KEY

    useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&units=metric&appid=${weatherKey}`)
    .then(response => {setWeather(response.data)})
    }, [country])

    if (weather === null) {
       return <p>Loading weather...</p>
    }

    const icon = weather.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
      <div>
        <h1>Weather in {country.name.common}</h1>
        <p>Temperature: {weather.main.temp}</p>
        <img src={iconUrl} alt='weather icon' />
        <p>Wind {weather.wind.speed} m/s</p>
      </div>
    )
  }
  


  const showCountry = (country) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(language => 
          <li key={language}>{language}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}/>
        <Weather country={country} />
      </div>
    )}

  const renderResults = () => {
    if (filteredCountries.length > 10) {
      return <p>{"Too many matches, specify another filter"}</p>
    }

    else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      return (
      showCountry(country)
      )
    }

    else {
    return (
    <div>
      {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}<button onClick={() => handleShowCountry(country)}>show</button></li>)}
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
