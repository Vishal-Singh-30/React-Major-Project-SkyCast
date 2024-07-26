import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateInfo}) {

    // state variable for searchbox (city)
    let [city,setCity] = useState("");

    // state variable for error ! 
    let [error,setError] = useState(false);

    // Wheather API URL & KEY
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY =  "b7d5e12139f5251d9a0b02bd5b9db101";

    // function to get Wheather information !
    let getWheatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        // convert the response to json format !
        let jsonResponse =  await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
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


    

    // event listner + set func call !
    function handleChange(event) {
        setCity(event.target.value);
    }

    // on submiting the form we want our functionality (prevent default)
    async function handleSubmit(event) {
        try{
            // prevent default
        event.preventDefault();
        console.log(city);
        setCity("");
         let newInfo = await getWheatherInfo();
         updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    };

    return <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="standard" value={city} onChange={handleChange} required/>
        <br />
        <br />
        <Button variant="contained" type="submit" endIcon={<TravelExploreIcon />}>Search</Button>
        {error && <p style={{color: "red"}}>No Such Place Exists!</p>}
        </form>
    </div>
}


export default SearchBox;
