import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button,Carousel, Container, Row, Col,Jumbotron,Navbar,Nav,NavDropdown,Form,FormControl, NavItem} from 'react-bootstrap'
class SearchItemList extends Component{

    state={
        value:[],
        names:[],
        inputText: '',
        searchedNames: [],
        searchedItems: []
    }

    handleChange = (event) =>{
        this.setState({
                value:[],
                names:[],
                inputText: '',
                searchedNames: [],
                searchedItems: []

            })
        if (event.target.value.length >= 1) {
            const valueSplitted = event.target.value.split('')
            this.setState({
                value: valueSplitted,
                inputText: event.target.value
            })
        }else{
            // alert("search bar is empty")
            this.setState({
                value:[],
                names:[],
                inputText: '',
                searchedNames: [],
                searchedItems: []

            })
        }
    }
    
    componentDidMount =async()=>{

        if (this.props.params.match.dynamic >= 1) {
            const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.state.value[0]}`)

            
            dataSet.data.meals.map((item) =>{
                this.setState({
                    names: [...this.state.names,item.strMeal]
                })
            })

            this.state.names.filter((item) =>{
                
                var itemLower = item.toLowerCase();

                if (this.state.value.length == 1) {
                    this.setState({
                        searchedNames: [...this.state.searchedNames, item]
                    })
                }else if (this.state.value.length > 1 && itemLower.charAt(1) === this.state.value[1].toLowerCase()) {
                    this.setState({
                        searchedNames: [...this.state.searchedNames, item]
                    })
                }
            })

            dataSet.data.meals.filter((item)=>{
                if (this.state.searchedNames.includes(item.strMeal) === true) {
                    this.setState({
                        searchedItems:[...this.state.searchedItems, item]
                    })
                }
            })
        }else{
            alert("error")
        }
    }
    

    render(){
//  console.log(this.state.category)
        return(
            
            <div>
                <Form className="d-flex " >
                    <FormControl
                        type="search"
                        placeholder="Find a Recipe"
                        className="mr-2"
                        aria-label="Search"
                        style={{borderRadius:"0px"}}
                    class="form-control me-2" type="search"  aria-label="Search" onChange={this.handleChange}/>

                    <Button variant="outline-none" style={{borderRadius:"0px"}} id="search-btn" onClick={this.handleClick}><i class="fas fa-search"></i></Button>
                    </Form>
                <div style={{display:"inline"}}>
                    {
                    this.state.searchedItems.map((item)=>{
                        return(
                            <div style={{display:"inline-block",padding:"50px"}}>
                                {/* <b>{item.strCategory}</b><br/> */}
                                <Link to={`/searched/${item.idMeal}`}><img style={{width:"150px"}} src={item.strMealThumb}/></Link>
                                <p>{item.strMeal}</p>
                                {/* <p>{item.strArea}</p> */}
                                {/* <i>{item.strInstructions}</i> */}
                                
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        )
    }
}

export default Search