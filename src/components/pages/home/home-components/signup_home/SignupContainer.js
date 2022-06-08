import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dogInCar from "./dogredcar.jpg";
import dogCollar from "./dogcollar.jpg";
import dogOnCar from "./dogoncar.jpg";
import dogRide from "./dogride.jpg";
import dogShark from "./dogshark.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import "./SignupContainer.css";

function SignupContainer(){
    return(
        <Container fluid className="signup-home"> 
            <Container>
                    <Row className="h-100">
                    <Col lg={6}>
                        <Carousel className="carousel slide" data-ride="carousel">
                            <Carousel.Item className="caraousel-item">
                                <Image 
                                    className="d-block w-100"
                                    src={dogInCar}
                                    alt="Dog poking head out of red car"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="caraousel-item">
                                <Image 
                                    className="d-block w-100"
                                    src={dogCollar}
                                    alt="Dog looking at rode from passenger seat"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="caraousel-item">
                                <Image 
                                    className="d-block w-100"
                                    src={dogOnCar}
                                    alt="Dog poking head out of red car"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="caraousel-item">
                                <Image 
                                    className="d-block w-100"
                                    src={dogRide}
                                    alt="Dog on top of car that says spud on license plate"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="caraousel-item">
                                <Image 
                                    className="d-block w-100"
                                    src={dogShark}
                                    alt="Dog on driver's seat of car with shark toy on top"
                                />
                            </Carousel.Item>    
                        </Carousel>
                    </Col>
                    <Col lg={5} className="d-flex
                                            order-first order-lg-0">
                        <h1 className="sign-up display-3">Pet a dog and get paid
                            <p className="signup-flavor-text">Your favorite platform for spending a day with a dog (or dogs!) and getting that sweet, ol' Benjamin all the while. </p>
                            <div className="signup-buttons d-flex justify-content-start">
                                <button className="btn btn-primary btn-lg">Signup</button>
                                <button className="btn btn-secondary btn-lg">Login</button>
                            </div>
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default SignupContainer;