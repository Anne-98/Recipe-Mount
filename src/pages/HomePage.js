import React from 'react'
import Home from '../components/Home/Home'
import '../css/home.css'
import '../css/trending.css'
import CarouselDiv from '../components/Home/CarouselDiv'
import Circles from '../components/Home/Circles'
import Trending from '../components/Home/Trending'
import Banner from '../components/Home/Banner'
import About from '../components/Home/About'

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <CarouselDiv />
                <Circles />
                <Trending /> 
                <Banner />
                <About />
            </div>
        )
    }
}

export default HomePage