import {Component} from 'react'
import axios from 'axios'
import '../css/recipeDetails.css'
import {Table,Image} from 'react-bootstrap'

class DetailsPage extends Component{

    state={
        id: 0,
        categoryDetails:"",
        ingrediants:[],
        measures:[],
        ingrediantsMeasures:[]
    }

    componentDidMount = async() =>{
        var categoryId = this.props.match.params.dynamic

        console.log(this.props.match.params.dynamic) 
        const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryId}`) 

        var meal = dataSet.data.meals[0]
        this.setState({
            id: categoryId,
            categoryDetails: meal
        })

        console.log(dataSet.data.meals[0])
        for (let index = 1; index <= 20; index++) {
            var ingrediant = `strIngredient${index}`
            var measure = `strMeasure${index}`
            if (meal[`${ingrediant}`] !== "") {
                this.setState({
                    // ingrediants: [...this.state.ingrediants,meal[`${ingrediant}`]], 
                    // measures: [...this.state.measures, meal[`${measure}`]],
                    ingrediantsMeasures:[...this.state.ingrediantsMeasures,{name: meal[`${ingrediant}`], quantity: meal[`${measure}`]}]
                })
            }else{
                break;
            }
        }
    }

    componentDidUpdate = async(prevProps) =>{
        if (this.props.match.params.dynamic !== prevProps.match.params.dynamic) {
            var categoryId = this.props.match.params.dynamic

            console.log(this.props.match.params.dynamic) 
            const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryId}`) 

            var meal = dataSet.data.meals[0]
            this.setState({
                id: categoryId,
                categoryDetails: meal
            })

            console.log(dataSet.data.meals[0])
            for (let index = 1; index <= 20; index++) {
                var ingrediant = `strIngredient${index}`
                var measure = `strMeasure${index}`
                if (meal[`${ingrediant}`] !== "") {
                    this.setState({
                        ingrediants: [...this.state.ingrediants,meal[`${ingrediant}`]], measures: [...this.state.measures, meal[`${measure}`]]
                    })
                    break;
                }else{
                    break;
                }
            }
        }
    }
//     componentDidUpdate(prevProps) {
//  //Typical usage, don't forget to compare the props
//  if (this.props.userName !== prevProps.userName) {
//    this.fetchData(this.props.userName);
//  }
// }

    render(){
        return(
            <div className="details-wrapper-div">
                <h1 className="details-heading-outer">{this.state.categoryDetails.strMeal}</h1>
                <div className="card mb-3 details-wrapper">
                <div className="row g-0 details-container">
                    <div className="col-md-4 details-image-div" >
                    <img src={this.state.categoryDetails.strMealThumb} className="img-fluid rounded-start details-image" alt="..." />
                    </div>
                    <div className="col-md-3 details-measures">
                    <div className="card-body details-measures-body">
                        <u> <h5 className="card-title details-heading-inner">Ingrediants</h5></u>
                        <Table hover className="details-table">
                            <tbody>
                                    {this.state.ingrediantsMeasures.map((item) =>{
                                        return(
                                            <tr className="details-measures-div" >
                                            
                                                <td >{item.name}</td>
                                                <td >{item.quantity}</td>
                                            
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="col-md-5 details-description ">
                        <p className="card-title details-heading-inner">{this.state.categoryDetails.strMeal}</p>
                        <p className="card-text">{this.state.categoryDetails.strInstructions}</p>
                        <a href={this.state.categoryDetails.strYoutube}>Video</a>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}

export default DetailsPage