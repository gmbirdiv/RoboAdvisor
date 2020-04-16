import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

import './Questions.css'; 



class Question1 extends Component {


    render() {
        const { addRisk, nextQuestion } = this.props; 
        return (
            <div className="questionContainer2">
                <form className="question">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">I plan on withdrawing for Retirement In...</FormLabel>
                        <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" onChange={addRisk('question1RiskFactor')}>
                            <FormControlLabel value="1" control={<Radio />} label="Less than 3 years" />
                            <FormControlLabel value="2" control={<Radio />} label="4-7 years" />
                            <FormControlLabel value="3" control={<Radio />} label="8-10 years" />
                            <FormControlLabel value="4" control={<Radio />} label="more than 10 years"  />
                        </RadioGroup>
                        <Button variant="outlined" color="primary" onClick={nextQuestion}>
                            Next
                        </Button>
                    </FormControl>
                </form>
            </div>
                    )
    }
}

export default Question1;
