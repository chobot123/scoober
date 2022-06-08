import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import appointment from "./VLO-Enrollment-V2-W.gif"
import "./TryToday.css";

function TryToday(){
    return (
        <Container fluid className="try-today">
            <Container>
                <Row>
                    <Col lg={true} className="d-flex flex-column justify-content-center">
                        <p className="h3">
                            Ready, set, bark in just a few quick paws
                        </p>
                        <p>Go to work, school, or vacation knowing your pet is being cared for by a fellow
                        dog lover</p>
                        <ul>
                            <li className="treat"> Get an affordable caretaker ASAP</li>
                            <li> Know that your caretaker is vetted</li>
                            <li> Schedule your doggo vacation in advance</li>
                        </ul>
                        <button className="btn btn-lg btn-primary align-self-start">Schedule today</button>
                    </Col>
                    <Col lg={true} className="d-flex justify-content-center">
                        <Image className="img-fluid"
                        src={appointment}
                        alt="Scheduling a scoober"
                        />
                    </Col>
                </Row>
            </Container>           
        </Container>
    )
}

export default TryToday;