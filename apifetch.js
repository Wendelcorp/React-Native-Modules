// To use in parent file:
// import {fetchWeather} from './apifetch'
// componentDidMount() {
//   this.fetchWeather(-10,10).then(res => console.log(res))
// }

// To allow:
// edit info.plist
// below <dict>
// <key>NSAllowsArbitraryLoads</key>
// </true>

const rootUrl = 'http://api.weather.com.......'

export const fetchWeather = (lat, lon) => {
  const url = rootUrl + '&lat=' + lat + '&lon=' + lon
  console.log(url)

  return fetch(url)
    .then(res => res.json())
    .then(json => {
      temp: json.main.temp,
      weather: json.weather[0].main
    })
}
