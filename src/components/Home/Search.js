import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button,Carousel, Container, Row, Col,Jumbotron,Navbar,Nav,NavDropdown,Form,FormControl, NavItem} from 'react-bootstrap'
class Search extends Component{

    state={
        input: "none",
        inputValue: ""
    }

    // refreshPage = () => {
    //     window.scrollTo(0, 0)
    // }
    handleChange = (event) => {
        if (event.target.value != "") {
            /*console.log("1")*/
            this.setState({
                input: event.target.value,
                inputValue: event.target.value
            }) 
        }else{
            /*console.log("2")*/
            this.setState({
                inputValue: "",
                input: "none"
            }) 
        }
    }
    handleClick = (event) =>{
        // window.location.reload(true)
        window.scrollTo(0, 0)
        if (event.target.value != "") {
            /*console.log("3")*/
            this.setState({
                input: "none",
                inputValue: ""
            }) 
        }else{
            /*console.log("4")*/
            this.setState({
                input: "none",
                inputValue: ""
            }) 
        }
    }
    render(){
        console.log("Input: ",this.state.input)
        console.log("InputValue: ",this.state.inputValue)
        return(
            <div >
                <Form className="d-flex" >
                    <FormControl
                        type="search"
                        placeholder="Find a Recipe"
                        id="search-input"
                        aria-label="Search"
                        value={this.state.inputValue} onChange={this.handleChange} style={{borderRadius:"40px 0px 0px 20px", border:"#f08080 solid 2px"}}/>

                    <Link to={`/search/searchedItem/${this.state.input}`} >
                        <Button id="search-btn" onClick={this.handleClick} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" 
                            >
                                <i class="fas fa-search" ></i>
                        </Button>
                        </Link>
                </Form>
            </div>
        )
    }
}

export default Search