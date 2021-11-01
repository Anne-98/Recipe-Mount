import {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import logo from '../../images/logo1.png'
import '../../css/about.css'

class About extends Component{
    render(){
        return(
            <Container id="about-container" fluid>
                <Container id="about-container-inner">
                    <Row id="about-wrapper">
                        <Col sm={12} md={4} id="about-logo-col">
                            <img id="about-logo" src={logo}/>
                        </Col>
                        <Col sm={12} md={8} id="about-description-div">
                            <h3 id="about-heading">Recipe Mount</h3><br/>
                            <p>
                                You can find new recipes all over the world and test out new delicacies by connecting with us. When you visit our website, you'll find a detailed description and an intuitive layout encouraging you to try new, experimental dishes. You can get new recipes from Recipe Mount when you're stuck for dinner ideas for your loved ones.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default About