// import {fetchWeather} from './apifetch'

const rootUrl = 'http://api.weather.com.......'

export const fetchWeather = (lat, lon) => {
  const url = rootUrl + '&lat=' + lat + '&lon=' + lon
  console.log(url)
}
