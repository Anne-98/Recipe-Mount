import {Component} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Trending extends Component{

    state = {
        meal: []
    }

    refreshPage = () => {
        window.scrollTo(0, 0)
    }

    componentDidMount = async() => {
        for (let index = 0; index < 15; index++) {
            const dataSet = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')

            this.setState({
                meal: [...this.state.meal, dataSet.data.meals[0]]
            })
            
        }
    }

    render(){
        console.log("meal",this.state.meal)
        return(
            <div className="trending-items-wrapper">
                <div  style={{textAlign:"center"}}>
                    <div style={{display: "inline-block"}} className="trending-container">
                    <h1 className="category-heading">Trending Items</h1>
                        {
                    this.state.meal.map((item)=>{
                        return(
                            
                            <div style={{display:"inline-block"}} className="dynamic-categories-component" onClick={this.refreshPage}>
                                <b>{item.strCategory}</b><br/>
                                <Link to={`/Recipe-Mount/searched/${item.idMeal}`}>
                                    <Card  style={{ width: '15rem' }}  className=" text-black dynamic-category-component border-0 ">
                                <Card.Img className="dynamic-categories-image" variant="top" src={item.strMealThumb} />
                                <Card.ImgOverlay className="dynamic-categories">
                                    <Card.Title className="dynamic-category-name">{item.strMeal}</Card.Title>
                                </Card.ImgOverlay>
                                </Card>
                                </Link>
                                
                            </div>
                        )
                    })
                }
                    </div>
            </div>
            </div>
        )
    }
}

export default Trending