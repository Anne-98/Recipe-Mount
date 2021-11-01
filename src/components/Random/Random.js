import axios from 'axios'
import React from 'react'
import {Card,Table} from 'react-bootstrap'

class Random extends React.Component{

    state={
        name:'',
        instructions:'',
        images:"",
        video: "",
        ingrediantsMeasures:[]

    }

    componentDidMount= async()=>{
        const dataSet = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')

        const meal = dataSet.data.meals[0]

        for (let index = 1; index <= 20; index++) {
            var ingrediant = `strIngredient${index}`
            var measure = `strMeasure${index}`
            if (meal[`${ingrediant}`] !== "") {
                
                this.setState({
                    ingrediantsMeasures:[...this.state.ingrediantsMeasures,{name: meal[`${ingrediant}`], quantity: meal[`${measure}`]}]
                })
            }else{
                break;
            }
            
        }

        this.setState({
            name: meal.strMeal,
            instructions: meal.strInstructions,
            images: meal.strMealThumb,
            video: meal.strYoutube
        })
    }

    render(){
        return(
                <div className="details-wrapper-div">
                <h1 className="details-heading-outer">{this.state.name}</h1>
                <div className="card mb-3 details-wrapper">
                <div className="row g-0 details-container">
                    <div className="col-md-4 details-image-div" >
                    <img src={this.state.images} className="img-fluid rounded-start details-image" alt="..." />
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
                        <p className="card-title details-heading-inner">{this.state.name}</p>
                        <p className="card-text">{this.state.instructions}</p>
                        <a href={this.state.video}>Video</a>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Random