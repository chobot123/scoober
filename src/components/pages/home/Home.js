import React from "react";
import HowItWorks from "./home-components/howitworks_home/HowItWorks";
import Safety from "./home-components/safety_home/Safety";
import SignupContainer from "./home-components/signup_home/SignupContainer";
import TryToday from "./home-components/trytoday_home/TryToday";
import "./Home.css";

function Home(){

    return(
        <div className="home">
            <SignupContainer/>
            <HowItWorks />
            <TryToday />
            <Safety />
            <div className="offerings-container"></div>
        </div>
    )
}

export default Home;