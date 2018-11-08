import React from 'react'
import Select from 'react-select'

class SelectCity extends React.Component {
    
    state = {
        cityName: 'Duzce'
    }

    componentWillMount() {
        this.props.onSelect(this.state.cityName)
    }

    handleChange = (value) => {
        this.setState({cityName: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSelect(this.state.cityName)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Select
                    options={['Istanbul', 'Duzce', 'Ankara']}
                    value={this.state.cityName}
                    getOptionLabel={option => option}
                    getOptionValue={option => option}
                    onChange={this.handleChange}
                />
                    
                    <button type="submit">Bul</button>
                </form>
            </div>
        )
    }
}

export default SelectCity