import React from 'react';
import RiskQuestions from './components/RiskQuestions';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import heroImage from './images/heroImage2.jpg'
import robotsImg from './images/robotsTransparent.png'; 
import robotAdvising from './images/roboadvising.svg'

import './App.css' ; 


function App() {
  return (
    <div className="App">
      <AppBar  position="static">
        <Toolbar className='toolBar'>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Plannertron 5000
          </Typography>
        </Toolbar>
    </AppBar>
      <div className="heroContainer">
        <div className="heroText">
            <h1> Investing is Hard...</h1>
            <h2>So why not let a robot do it?</h2>
        </div>
        <div className='heroImage'>
          <img src={heroImage}/>
        </div>
      </div>

      <div className="section1">
        <div className="imageContainer1">
          <img src={robotsImg}/>
        </div>
        <div className="section1Text">
          <h1> Robots were built to do the things we don't want to and Investing is no different</h1>
          <p> Whether its household cleaning, repetitive factory work, or scamming people over the phone, robots have taken over the jobs humans didn't want to do and investing is no different. Surprisingly, like those activities, there are some people in the world who don't enjoy the thrilling nature of asset allocation or index fund selection. That's why we built the Plannertron 5000. With a few simple inputs, the Plannertron 5000 can take your info and select which of our prebuilt portfolios are right for you.  </p> 
          </div>
        </div>
        <div className="step2Container">
          <div className="step2">
          <h3>Step 2</h3>
            <p> Plannertron 5000 evaluates your inputs and recommends the prebuilt portfolio that best suites your needs</p>
          </div>
        </div>
        <div className="section2">
        <div className="imageContainer2">
          <img src={robotAdvising}/>
          <div className="step1">
            <h3>Step 1</h3>
            <p> You answer a few quick questions about your financial status, goals, and risk tolerance</p>
          </div>
          <div className="step3">
            <h3>Step 3</h3>
            <p> You sit back and let the Plannertron 5000 fulfill all your financial goals</p>
          </div>
        </div>
        </div>

      <div className="questionSection">
      <div className="questionContainer">
        <RiskQuestions />
      </div>
      </div>
    </div>
  );
}

export default App;

