import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RoboImg from '../images/robot.png'; 
import styled from 'styled-components';

const Startstyle = styled.div`
    height:100%; 
    width: 100%; 
    color: #244883;
    text-align: center; 
`
const Imgstyle = styled.img`
    height: 400px; 
    width: 400px; 
    margin-bottom: 15px; 
` 

class Start extends Component {


    render() {
        const { nextQuestion } = this.props; 
        return (
            <Startstyle>
                <h1> Plannertron 5000</h1>
                <Imgstyle className="plannertron" src={RoboImg}/>
                <div>
                <Button variant="outlined" color="primary" onClick={nextQuestion}>
                    Begin your Risk Assessment 
                </Button>
                </div>
            </Startstyle>
                    )
    }
}

export default Start;
