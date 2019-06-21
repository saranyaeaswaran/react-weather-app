import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';
const Api_Key = "bc101bbf3ac89879e5627cd744a3ff3a";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            responseCityName: undefined,
            responseCountryName: undefined,
            responseMainWeather: undefined,
            responseWeatherDesc: undefined,
            responseTemp: undefined,
            responseTimeCalculated: undefined,
            error: undefined
        }
    }

    getWeather = async(e) => {
        e.preventDefault();

        const cityName = e.target.elements.city.value;
        const countryName = e.target.elements.country.value;

        //To check the user provided City and Country name are not blank
        if (cityName && cityName) {

            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&units=metric&appid=${Api_Key}`);
            const response = await api_call.json();
            console.log(response);

            this.setState({
                responseCityName: response.name,
                responseCountryName: response.sys.country,
                responseMainWeather: response.weather[0].main,
                responseWeatherDesc: response.weather[0].description,
                responseTemp: response.main.temp
            })
        } else {
            this.setState({
                error: "Please provide City name and Country to fetch the data"
            })
        }

    }

    render() {
        return ( 
            <div>
                <div className = "wrapper">
                <div className = "main">
                <div className = "container">
                <div className = "row">
                <div className = "col-xs-5 title-container">
                    <Titles />
                </div> 
                <div className = "col-xs-7 form-container" >
                    <Form loadWeather = { this.getWeather }/> 
                    <Weather responseCityName = { this.state.responseCityName }
                            responseCountryName = { this.state.responseCountryName }
                            responseMainWeather = { this.state.responseMainWeather }
                            responseWeatherDesc = { this.state.responseWeatherDesc }
                            responseTemp = { this.state.responseTemp }
                            responseError = { this.state.error } /> 
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        )
    }
}
export default App;