import React from "react";
import Container from "react-bootstrap/Container";
import "./HowItWorks.css";

function HowItWorks(){
    return (
        <Container fluid className="how-it-works-home">
            <Container fluid className="overlay">
                <Container>
                    <p className="h2">Scoober for you</p>
                    <p>The new way to chill from the city buzz (and get paid)</p>
                    <button className="btn btn-primary btn-lg">See how</button>
                </Container>
            </Container>
        </Container>
    )
}

export default HowItWorks;