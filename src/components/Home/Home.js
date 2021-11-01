import React, {useEffect, useState} from 'react'
import axios from 'axios'

class Home extends React.Component {

    state = {
        url: ''
    }

    componentDidMount = async() => {
        const dataSet = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')

        this.setState({
            url: dataSet.data.meals[0].strMealThumb
        })
    }

    render(){
        return(
            <>
                {/* <h1>Home</h1> */}
                {/* <img src={this.state.url} /> */}
            </>
        )
    }
}

export default Home