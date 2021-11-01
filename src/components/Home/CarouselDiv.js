import {Component} from 'react'
import carousel1 from '../../images/carousel/bakd-raw-by-karolin-baitinger-qzFtCfxV_sg-unsplash.jpg'
import carousel2 from '../../images/carousel/alexander-mils-6HPLJLe2mX8-unsplash.jpg'
import carousel3 from '../../images/carousel/carousel3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button,Carousel, Container, Row, Col,Jumbotron,Card} from 'react-bootstrap'
import '../../css/carousel.css'
import { Link } from 'react-router-dom'

class CarouselDiv extends Component{
    render(){
        return(
            <div id="carousel-container" >

                <Container id="popUp" style={{position:"absolute"}}>
                    <Row>
                        <Col xs={3} md={6} lg={4}>
                            <i  class="fas fa-utensils carouselIcon" ></i>
                        </Col>
                        
                        <Col xs={9} md={6} lg={8} id="carouselFollow">
                            <p>Follow<br/> to get the latest recipes,<br/> articles and more!</p>
                        </Col>
                    </Row>
                </Container >

                {/* carousel........................ */}
                <Carousel fade >
                    
                    <Carousel.Item id="carousel-img-1">
                        <Carousel.Caption className="carousel-caption-1">
                        <h2>Delicious Foods</h2>
                        <p>Make your moments happy.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="carousel-img-2">
                        <Carousel.Caption className="carousel-caption-2">
                        <h2>World Wide</h2>
                        <p>The whole world is near than fingertips.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="carousel-img-3">
                        <Carousel.Caption className="carousel-caption-3">
                        <h2>Variety of Choices</h2>
                        <p>Different tastes fix the mood.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}

export default CarouselDiv;