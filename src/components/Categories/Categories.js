import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card,Button,Jumbotron} from 'react-bootstrap'

class Categories extends React.Component{

    state={
        category:[],
        description:""
    }

    componentDidMount = async() => {
        var dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

            var categoryList = dataSet.data.categories
        
            this.setState({
                category: categoryList,
                
            })
    }

    refreshPage = () => {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="categories-wrapper" style={{textAlign:"center"}}>
                <div className="categories-container">
                    <h1 className="category-heading">Categories</h1>
                    <div style={{display: "inline-block"}} >
                        {this.state.category.map((item)=>{
                    return(
                        <div  style={{display: "inline-block"}} onClick={this.refreshPage}>
                            <Link className="category-link" to={`/Recipe-Mount/${item.strCategory}`}>
                                <Card style={{ width: '18rem' }}  className=" text-black category-component border-0 ">
                                <div className="category-image-container" style={{background:"#eee"}}><Card.Img className="categories-image" variant="top" src={item.strCategoryThumb} /></div>
                                <Card.Body  className="category-component-body">
                                    <Card.Title className="category-name">{item.strCategory}</Card.Title>
                                    <Card.Text id="category-description">
                                    {item.strCategoryDescription.substring(0, 135)}
                                    </Card.Text>
                                </Card.Body>
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

export default Categories