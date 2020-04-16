import styled from 'styled-components';
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';


const NewButton = styled(Button)`
    margin: 1em ;
`;

class Question2 extends Component {
    
    render() {
        const { addRisk, nextQuestion, previousQuestion } = this.props; 
        return (
            <form>
            <FormControl component="fieldset">
                <FormLabel component="legend">When I do begin withdrawing for retirement, I plan on withdrawing this money....</FormLabel>
                <RadioGroup  aria-label="gender" name="customized-radios" onChange={addRisk('question2RiskFactor')}>
                    <FormControlLabel value="1" control={<Radio />} label="all at once" />
                    <FormControlLabel value="2" control={<Radio />} label="Over 1-3 years"  />
                    <FormControlLabel value="3" control={<Radio />} label="Over 3-6 years"  />
                    <FormControlLabel value="4" control={<Radio />} label="over more than 6 years" />
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


export default Question2;