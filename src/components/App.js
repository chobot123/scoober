import '../App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='content'>

      <Header />

      <div className='body'>
        <Router>
          <Routes>
            <Route 
              exact path="/"
              element={<Home />}
            />
            <Route exact path="/about">

            </Route>
            <Route exact path="/offerings">

            </Route>
            <Route exact path="/how-does-scoober-work">

            </Route>
            <Route exact path="/careers">

            </Route>
            <Route exact path="/taxi">

            </Route>
            <Route exact path="/walks">

            </Route>
            <Route exact path="/Daycare">

            </Route>
          </Routes>  
        </Router>
      </div>

    </div>
  )
}

export default App;
