import React from 'react'
import Axios from 'axios'


class Weather extends React.Component {
    
    state = {
        weather: '',
        tmp: '',
        desc: '',
        isLoading: false
    }

     getWeather = async () => {
        this.setState({isLoading: true})
            await Axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.props.city +'&?units=metric&APPID=db33fb4dd60b6391739a15cdd0c781f5')
            .then(response => {
            let tmp = Math.ceil((response.data.main.temp - 273))
            let weather = response.data.weather[0].main
            let desc = (response.data.weather[0].description)[0].toUpperCase() + (response.data.weather[0].description).substr(1)

            this.setState({weather, tmp, desc})
            })
            this.setState({isLoading: false})
    }

    componentDidMount(){
        this.getWeather()
    }
    
    async componentDidUpdate(prevProps, prevState) {
        if(this.state === prevState) {
            this.getWeather()
        }
    }
    render() {
        let row = !this.state.isLoading ? (<div><h3>{this.props.city}</h3>
            <h4>{this.state.weather}</h4>
            <p>{this.state.desc}</p>
            <h1>{this.state.tmp}</h1></div>) : (<div><p>Finding...</p></div>)
        return(
            <div>
                {row}
            </div>
        )
    }
}

export default Weather