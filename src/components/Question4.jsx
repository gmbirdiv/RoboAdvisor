import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';



class Question4 extends Component {
    
    render() {
        const {  addRisk, nextQuestion, previousQuestion } = this.props; 
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">How much risk are you willing to take to try and beat inflation?</FormLabel>
                <RadioGroup  aria-label="gender" name="customized-radios" onChange={addRisk('question4RiskFactor')} >
                    <FormControlLabel value="1" control={<Radio />} label="A very low amount of risk"/>
                    <FormControlLabel value="2" control={<Radio />} label="A small amount of risk"  />
                    <FormControlLabel value="3" control={<Radio />} label="A moderate amount of risk"  />
                    <FormControlLabel value="4" control={<Radio />} label="A high amount of risk" />
                </RadioGroup>
                <Button variant="outlined" color="primary" onClick={previousQuestion}>
                    Previous
                </Button>
                <Button variant="outlined" color="primary" onClick={nextQuestion}>
                    Next
                </Button>
            </FormControl>
                    )
    }
}

export default Question4;