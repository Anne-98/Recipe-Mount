import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
class SearchItemList extends Component{

    state={
        value:[],
        names:[],
        inputText: '',
        searchedNames: [],
        searchedItems: [],
        emptyData: false
    }

    refreshPage =()=>{
        window.location.reload(true)
    }

    componentDidMount =async(props)=>{
        
        if (this.props.match.params.dynamic.length >= 1) {

            const valueSplitted = this.props.match.params.dynamic.split('')
            this.setState({
                value: valueSplitted,
                inputText: this.props.match.params.dynamic
            })

            const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${valueSplitted[0]}`)

            if(dataSet.data.meals == null || dataSet.data.meals == "none"){
                this.setState({
                    emptyData: true
                })
            }else{
                console.log(dataSet.data.meals)
                dataSet.data.meals.map((item) =>{
                    this.setState({
                        names: [...this.state.names,item.strMeal],
                        emptyData: false
                    })
                })

                this.state.names.filter((item) =>{
                    
                    var itemLower = item.toLowerCase();

                    if (valueSplitted.length == 1) {
                        this.setState({
                            searchedNames: [...this.state.searchedNames, item]
                        })
                    }else if (valueSplitted.length > 1 && itemLower.charAt(1) === valueSplitted[1].toLowerCase()) {
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
            }

        }else if(this.props.match.params.dynamic.length == 0){
            alert("search bar is empty")
            // this.setState({
            //     value:[],
            //     names:[],
            //     inputText: '',
            //     searchedNames: [],
            //     searchedItems: []

            // })
        }
    }
    
    componentDidUpdate = async(prevProps) => {
 //Typical usage, don't forget to compare the props
        if (this.props.match.params.dynamic !== prevProps.match.params.dynamic) {
            this.setState({
                value:[],
                names:[],
                inputText: '',
                searchedNames: [],
                searchedItems: [],
                emptyData: false

            })
        if (this.props.match.params.dynamic.length >= 1) {

            const valueSplitted = this.props.match.params.dynamic.split('')
            this.setState({
                
                value: valueSplitted,
                inputText: this.props.match.params.dynamic,
                emptyData:false
            })

            const dataSet = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${valueSplitted[0]}`)

            if(dataSet.data.meals == null || dataSet.data.meals == "none"){
                this.setState({
                    emptyData: true
                })
            }
            else{
                dataSet.data.meals.map((item) =>{
                this.setState({
                    names: [...this.state.names,item.strMeal],
                    emptyData:false
                })
            })

            this.state.names.filter((item) =>{
                
                var itemLower = item.toLowerCase();

                if (valueSplitted.length == 1) {
                    this.setState({
                        searchedNames: [...this.state.searchedNames, item]
                    })
                }else if (valueSplitted.length > 1 && itemLower.charAt(1) === valueSplitted[1].toLowerCase()) {
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
            }

        }else if(this.props.match.params.dynamic.length == 0){
            alert("search bar is empty")
            // this.setState({
            //     value:[],
            //     names:[],
            //     inputText: '',
            //     searchedNames: [],
            //     searchedItems: []
            // })
            }
        }
            
    }
    render(){
//  console.log(this.state.category)
        return(
            <div className="searched-items-wrapper">
                <div  style={{textAlign:"center"}}>
                    <div style={{display: "inline-block"}} className="categories-container">
                    <h1 className="category-heading">Searched Items</h1>
                    <div style={{display: this.state.emptyData == false ? "none": "block"}}>Serched Item not found</div>
                        {
                    this.state.searchedItems.map((item)=>{
                        return(
                            
                            <div style={{display:"inline-block"}} className="dynamic-categories-component" onClick={this.refreshPage}>
                                {/* <b>{item.strCategory}</b><br/> */}
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

export default SearchItemList