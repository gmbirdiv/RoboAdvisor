import React, { Component } from "react";
import Question1 from './Question1'; 
import Question2 from './Question2'; 
import Question3 from './Question3'; 
import Question4 from './Question4'; 
import Question5 from './Question5'; 
import Question6 from './Question6'; 
import Results from './Results'; 







 class RiskQuestions extends Component {

    
    state = {
        question: 1, 
        question1RiskFactor: 0,
        question2RiskFactor: 0,
        question3RiskFactor: 0,
        question4RiskFactor: 0,
        question5RiskFactor: 0,
        question6RiskFactor: 0,
        totalRiskFactor: 0
    }

    addTotalRisk = () => {
        const {question1RiskFactor,question2RiskFactor, question3RiskFactor, question4RiskFactor, question5RiskFactor, question6RiskFactor} = this.state; 
        this.setState( {totalRiskFactor: question1RiskFactor + question2RiskFactor + question3RiskFactor + question4RiskFactor + question5RiskFactor + question6RiskFactor})
    }

    nextQuestion = () => {
        const {question} = this.state
        this.setState({
            question: question + 1
        });
        this.addTotalRisk(); 
    };

    restart = () => {
        this.setState({
            question: 1
        });
    }

    previousQuestion = () => {
        const {question} = this.state 
        this.setState({
            question: question - 1
        })
    }

    addRisk = (id) => e => {
        const {riskFactor} = this.state; 
        this.setState({
            [id]: parseInt(e.target.value)
        })

    }



    render(){
        const { question}  = this.state; 

        switch(question) {
            case 1: 
                return ( 
                    < Question1 
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    addTotalRisk={this.addTotalRisk}
                    />
                )
            case 2: 
                return (
                    < Question2 
                    previousQuestion = {this.previousQuestion}
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    />
                )
                case 3: 
                return (
                    < Question3
                    previousQuestion = {this.previousQuestion}
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    />
                )
                case 4: 
                return (
                    < Question4
                    previousQuestion = {this.previousQuestion}
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    />
                )
                case 5: 
                return (
                    < Question5
                    previousQuestion = {this.previousQuestion}
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    />
                )
                case 6: 
                return (
                    < Question6
                    previousQuestion = {this.previousQuestion}
                    nextQuestion={this.nextQuestion}
                    addRisk={this.addRisk}
                    />
                )
                case 7: 
                return (
                    < Results
                    previousQuestion = {this.previousQuestion}
                    restart = {this.restart}
                    />
                )                

        }
    }



}

export default RiskQuestions; 