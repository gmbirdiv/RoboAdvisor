import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const NewButton = styled(Button)`
    margin: 1em ;
`;

class Question3 extends Component {
    
    render() {
        const {  addRisk, nextQuestion, previousQuestion } = this.props; 
        return (
            <form>
            <FormControl component="fieldset">
                <FormLabel component="legend">Which best describes your investing goal?</FormLabel>
                <RadioGroup  aria-label="gender" name="customized-radios" onChange={addRisk('question3RiskFactor')} >
                    <FormControlLabel value="1" control={<Radio />} label="Capital Protection/Avoiding Losses" />
                    <FormControlLabel value="2" control={<Radio />} label="Keeping low risk while seeking modest return"  />
                    <FormControlLabel value="3" control={<Radio />} label="Seeking greater returns with moderate risk"  />
                    <FormControlLabel value="4" control={<Radio />} label="Maximizing Returns while accepting a large amount of risk in account value" />
                </RadioGroup>
                <div className='buttonContainer'>
                <NewButton variant="outlined" color="primary" onClick={previousQuestion}>
                    Previous
                </NewButton>
                <NewButton variant="outlined" color="primary" onClick={nextQuestion}>
                    Next
                </NewButton>
                </div>
            </FormControl>
            </form>
                    )
    }
}

export default Question3;