import {Component} from 'react'
import {Card,Col,Container,Row,Button,Image} from 'react-bootstrap'
import BannerImage from '../../images/carousel/20.jpg'
import '../../css/banner.css'
import {Link} from 'react-router-dom'


class Banner extends Component{

    refreshPage = () => {
        window.scrollTo(0, 0)
    }

    render(){
        return(
                <div class="card banner-card border-0" >
                    <div class="row g-0 Banner-container" >
                        <div class="col-md-6">
                        <img src={BannerImage} class=" rounded-start banner-image " alt="..." />
                        </div>
                        <div class="col-md-6">
                        <div class="card-body banner-text-div" style={{padding:"0", margin:"0"}}>
                            <div className="banner-text-inner">
                                <h1 className="banner-heading">Cooking is Love You can eat</h1>
                        
                            <h5>“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”</h5>
                            
                            <i>– Gerard Depardieu</i><br/>
                            <div onClick={this.refreshPage}>
                                <Link to={'/random'}>
                                <button className="banner-button" >Try something New</button>
                            </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Banner