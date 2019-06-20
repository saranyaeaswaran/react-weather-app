import React from 'react';

class Weather extends React.Component {

    render() {
        return ( <
            div className = "title-container__subtitle" > {
                this.props.responseCityName &&
                <
                p className = "weather__key" > Location:
                    <
                    span className = "weather__value" > { this.props.responseCityName } { this.props.responseCountryName } < /span></p >
            } {
                this.props.responseMainWeather &&
                    <
                    p className = "weather__key" > Main Weather:
                    <
                    span className = "weather__value" > { this.props.responseMainWeather } < /span></p >
            } {
                this.props.responseWeatherDesc &&
                    <
                    p className = "weather__key" > Weather Description:
                    <
                    span className = "weather__value" > { this.props.responseWeatherDesc } < /span></p >
            } {
                this.props.responseTemp &&
                    <
                    p className = "weather__key" > Temperature:
                    <
                    span className = "weather__value" > { this.props.responseTemp } < /span> </p >
            } {
                this.props.responseError &&
                    <
                    p className = "weather__key" >
                    <
                    span className = "weather__value" > { this.props.responseError } < /span></p >
            } <
            /div>
        )
    }
}

export default Weather;