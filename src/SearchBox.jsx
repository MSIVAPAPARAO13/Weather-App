/* SearchBox.jsx */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  let [error,setError]=useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8852093ca25a8d1469ef7a5315758c06";

  const getWeatherInfo = async (cityName) => {


    try {
 const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const jsonResponse = await response.json();

    return {
      city: cityName,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  }catch(err){
   
    throw err;
  }
    
};
   

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
    const newInfo = await getWeatherInfo(city);
    updateInfo(newInfo);
    setCity("");
  }catch(err){
    setError(true);

  }
};

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          SEARCH
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Exist</p>}
      </form>
    </div>
  );
}
