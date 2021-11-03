import {Component} from 'react'
import Categories from '../Categories/Categories'
import axios from 'axios'
import {Link} from 'react-router-dom'
import InfiniteCarousel from 'react-leaf-carousel';
import '../../css/circles.css'


class Circles extends Component{

    state={
        category:[],
        categoryImage:[],
        activeSlideIndex: 0
    }
    setActiveSlideIndex = (newActiveSlideIndex) => {
            this.setState({
            activeSlideIndex: newActiveSlideIndex,
            });
        };

    refreshPage = () => {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="circles-bar">
                    <InfiniteCarousel 

                        

                        breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            },
                        },
                        ]}
                        dots={false}
                        showSides={true}
                        sidesOpacity={.6}
                        sideSize={.2}
                        slidesToScroll={1}
                        slidesToShow={6}
                        scrollOnDevice={true}
                    >

                    <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Beef">
                                <img alt='' src="https://www.themealdb.com/images/category/beef.png" />
                                <p className="circles-name">Beef</p>
                        </Link>
                    </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Chicken">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/chicken.png" />
                                <p className="circles-name">Chicken</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Dessert">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/dessert.png" />
                                <p className="circles-name">Dessert</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Lamb">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/lamb.png" />
                                <p className="circles-name">Lamb</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Miscellaneous">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/miscellaneous.png" />
                                <p className="circles-name">Miscellaneous</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Pasta">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/pasta.png" />
                                <p className="circles-name">Pasta</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Pork">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/pork.png" />
                                <p className="circles-name">Pork</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Seafood">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/seafood.png" />
                                <p className="circles-name">Seafood</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Side">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/side.png" />
                                <p className="circles-name">Side</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Starter">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/starter.png" />
                                <p className="circles-name">Starter</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Vegan">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/vegan.png" />
                                <p className="circles-name">Vegan</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Vegetarian">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/vegetarian.png" />
                                <p className="circles-name">Vegetarian</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Breakfast">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/breakfast.png" />
                                <p className="circles-name">Breakfast</p>
                            </div>
                        </Link>
                        </div>
                        <div className="circles-image-div" onClick={this.refreshPage}>
                        <Link className="circles-link" to="/Recipe-Mount/Goat">
                            <div className="circles-image-div">
                                <img alt='' src="https://www.themealdb.com/images/category/goat.png" />
                                <p className="circles-name">Goat</p>
                            </div>
                        </Link>
                        </div>
                        
                    </InfiniteCarousel>
                
            </div>
        )
    }
}

export default Circles