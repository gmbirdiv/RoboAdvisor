import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';



class Question5 extends Component {
    
    render() {
        const {  addRisk, nextQuestion, previousQuestion } = this.props; 
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">What would you do if your portfolio decreased 25% during a market decline, but you didn't need the money for 10 years?</FormLabel>
                <RadioGroup  aria-label="gender" name="customized-radios" onChange={addRisk('question5RiskFactor')} >
                    <FormControlLabel value="1" control={<Radio />} label="Move to less risky investments immediately"/>
                    <FormControlLabel value="2" control={<Radio />} label="Move to less risky investments over 3 months"  />
                    <FormControlLabel value="3" control={<Radio />} label="Gradually move to less risky investments over a year" />
                    <FormControlLabel value="4" control={<Radio />} label="Do Nothing" />
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

export default Question5;