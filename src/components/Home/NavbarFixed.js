import {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo1.png'
import carousel1 from '../../images/carousel/carousel1.jpg'
import carousel2 from '../../images/carousel/carousel2.jpg'
import carousel3 from '../../images/carousel/carousel3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button,Carousel, Container, Row, Col,Jumbotron,Navbar,Nav,NavDropdown,Form,FormControl, NavItem} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Search from './Search'

class NavbarFixed extends Component{

    refreshPage = () => {
        window.scrollTo(0, 0)
        window.location.reload(true)
    }

    render(){
        return(
            <div>

                {/* Navbar............................................*/}

                <Navbar expand="lg" style={{zIndex:"6"}} id="navbarContainer" className="navbar" fixed="top" >
                <Container fluid >
                    <Nav.Item href="#action1">
                        <Nav.Link className="active"  aria-current="page" onClick={this.refreshPage}>
                            <Link style={{textDecoration:"none", color:"#f08080"}} to="/Recipe-Mount">
                                <img src={logo} alt="" width="40" class="d-inline-block align-text-top" />
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item href="#action1">
                        <Nav.Link className="active"  aria-current="page" onClick={this.refreshPage}>
                            <Link style={{textDecoration:"none", color:"#f08080"}} to="/Recipe-Mount">
                                <h3 className="siteName">Recipe Mount</h3>
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    
                    
                    <Navbar.Toggle aria-controls="navbarScroll"  />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end" id="collapseExample">
                    <Nav 
                    className="mr-auto mb-2 mb-lg-0"
                    navbarScroll
                    >
                    <Nav.Item href="#action1">
                        <Nav.Link className="active"  aria-current="page" onClick={this.refreshPage}><Link id="navItem" to="/Recipe-Mount">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item href="#action2" >
                        <Nav.Link onClick={this.refreshPage} ><Link id="navItem" to="/categories">Categories</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item href="#action2" >
                        <Nav.Link onClick={this.refreshPage} ><Link refresh id="navItem" to="/random">Try It</Link></Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Search />
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarFixed
