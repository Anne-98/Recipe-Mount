import {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 
import {Card} from 'react-bootstrap'

class DynamicCategoriesPage extends Component{

    state={
        foods:[]
    }

    refreshPage = () => {
        window.scrollTo(0, 0)
    }

    componentDidMount = async() =>{
        
    var  categoryName = this.props.match.params.dynamic

        const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)

        this.setState({
            foods: dataSet.data.meals
        })
        // console.log(dataSet.data.meals)
    }

    render(){
        // console.log(this.props)
        var  categoryName = this.props.match.params.dynamic

        return(
            <div className="dynamic-categories-wrapper">
                <div  style={{textAlign:"center"}}>
                    <div style={{display: "inline-block"}} className="categories-container">
                    <h1 className="category-heading">{categoryName}</h1>
                        {this.state.foods.map((item)=>{
                    return(
                        <div  style={{display: "inline-block"}} className="dynamic-categories-component" onClick={this.refreshPage}>
                            <Link to={`/${categoryName}/${item.idMeal}`} >
                                <Card  style={{ width: '15rem' }}  className=" text-black dynamic-category-component border-0 ">
                                <Card.Img className="dynamic-categories-image" variant="top" src={item.strMealThumb} />
                                <Card.ImgOverlay className="dynamic-categories">
                                    <Card.Title className="dynamic-category-name">{item.strMeal}</Card.Title>
                                </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </div>
                    )
                })}
                    </div>
            </div>
            </div>
        )
    }
}

// {this.state.foods.map((item)=>{
//     return(
//         <div>
//             <Link to={`/${categoryName}/${item.idMeal}`} >
//                 <h1>{item.strMeal}</h1>
//                 <img style={{width: "200px"}} src={item.strMealThumb}/>
//             </Link>
//         </div>
// )
// })}

export default DynamicCategoriesPage