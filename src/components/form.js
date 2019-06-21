import React, { useState } from 'react';

// class Form extends React.Component {
const Form = (props) => {
        const [key, setKey] = useState(0)
            // resetValues(){
            //     // this.form.reset()
            //     document.getElementById("weather-form").reset()
            // }

        // render() {
        return (

            // <form ref={form => this.form = form} onSubmit={this.props.loadWeather}>
            <form id = "weather-form" onSubmit = { props.loadWeather } >
            <input type = "text" name = "city" placeholder = "City..." />
            <input type = "text" name = "country" placeholder = "Country..." />
            <button class = "btnGetWeather" > Get Weather </button> { /* <button class ="btnReset" onClick={this.resetValues}>Reset Values</button> */ } 
            {/* <button class = "btnReset" onClick = {()) => { setKey(key + 1) } } > Reset </button>  */}
            </form>
        )
    }
    // }

export default Form;