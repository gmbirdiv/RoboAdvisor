import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import './Questions.css'; 

const NewButton = styled(Button)`
    margin: 1em ;
`;



class Question6 extends Component {
    state = {
        imgSrc: "Sample A",
    }

    changeImg = () => event => {
        this.setState({
            imgSrc: event.target.name

        })
    }

    render() {
        const {  addRisk, nextQuestion, previousQuestion, values} = this.props; 
        const {imgSrc} = this.state; 
        const imagePath = require(`../images/${imgSrc}.png`)

        return (
            <form>
            <FormControl   required='true' component="fieldset">
                <FormLabel defaultValue={values.question5RiskFactor} component="legend">If you invested $100,000 which results would you be most comfortable with after one year?</FormLabel>
                <RadioGroup   name="customized-radios" onChange={addRisk('question6RiskFactor')} >
                    <div> 
                    <FormControlLabel  name="Sample A" value="1" control={<Radio />} label="Sample A" onChange={this.changeImg()} />
                    <FormControlLabel name="Sample B" value="2" control={<Radio />} label="Sample B"  onChange={this.changeImg()} />
                    <FormControlLabel name="Sample C" value="3" control={<Radio />} label="Sample C" onChange={this.changeImg()}/>
                    <FormControlLabel name="Sample D" value="4" control={<Radio />} label="Sample D" onChange={this.changeImg()}/>
                    </div>
                    <img src={imagePath} className="question6Graph"></img>
                </RadioGroup>
                <div className='buttonContainer'>
                <NewButton variant="outlined" color="primary" onClick={previousQuestion}>
                    Previous
                </NewButton>
                <NewButton type="submit" variant="outlined" color="primary" onClick={nextQuestion}>
                    Submit
                </NewButton>
                </div>
            </FormControl>
            </form>
                    )
    }
}

export default Question6;