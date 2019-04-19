import axios from "axios";

const API_URL =
  "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/";
const API_KEY = "ad0dbc837e0ebd1511414804a572ca8e";

export default async function fetchWeather(city, country) {
  const url = `${API_URL}weather?q=${city},${country}&appid=${API_KEY}`;
  const request = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
  return {
      type: 'FETCH_WEATHER',
      payload: request
  }
}
