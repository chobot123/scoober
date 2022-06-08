import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import walkDog from "./walkdog.jpg";
import dogInCar from "./dogwaitcar.jpg";
import "./Safety.css";

function Safety(){
    return (
        <Container fluid className="safety-home">
            <Container>
                <p className="h3 safety">Your dog's safety is our priority</p>
                <Row>
                    <Col lg={true}>
                        <Image className="img-fluid"
                            src={walkDog}
                            alt="Walking a bunch of dogs"
                        />
                        <p className="h5 safety">Our commitment to you</p>
                        <p>With every safety feauture and every standard in our 
                        Community guidelines, we are committed in actively keeping your pet
                        safe.</p>
                    </Col>
                    <Col lg={true}>
                        <Image className="img-fluid"
                            src={dogInCar}
                            alt="Dog waiting in car"
                        />
                        <p className="h5 safety">Our commit to the community</p>
                        <p>10% of each of your payments will go directly to a dog foster care of
                        your choice. </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Safety;