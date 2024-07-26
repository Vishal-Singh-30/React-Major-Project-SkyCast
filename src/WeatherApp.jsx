import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp(){

    // state variable to pass wheather infomation b/w component ! 
    // initialise with sample data ! 
    const [WeatherInfo, setWeatherInfo] = useState({
        
        city: "Delhi",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });
    const [WeatherInfo2, setWeatherInfo2] = useState({
        
        city: "NewYork",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });
    const [WeatherInfo3, setWeatherInfo3] = useState({
        
        city: "London",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });

    // function to call setWeatherInfo ->
    function updateInfo(newInfo){
        setWeatherInfo(newInfo);
    }; 




    return <div>
        <h2>SkyCast</h2>
        <h4>A Wheather App by Vishal Singh</h4>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info={WeatherInfo}/>
        <br />
        <br />
        <br />
        <div className="wheatherTab">
        <InfoBox info={WeatherInfo2}/>
        <InfoBox info={WeatherInfo3}/>
        <InfoBox info={WeatherInfo3}/>
        </div>
        <br />
        <br />
        <br />
        <div className="wheatherTab">
        <InfoBox info={WeatherInfo2}/>
        <InfoBox info={WeatherInfo3}/>
        <InfoBox info={WeatherInfo3}/>
        </div>
        
    </div>
}


// export wheather app -:
export default WeatherApp;