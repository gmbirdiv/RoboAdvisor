import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';



import './Results.css'

function createData(name, gains) {
    return { name, gains };
  }

const conservativeRows = [
    createData('Average Case', "+6.68%"),
    createData('Best Case', "+38.39%"),
    createData('Worst Case', "-29.46%")
]

const moderateRows = [
    createData('Average Case', "+7.56%"),
    createData('Best Case', "+49.50%"),
    createData('Worst Case', "-38.12%")
]

const aggressiveRows = [
    createData('Average Case', "+8.11%"),
    createData('Best Case', "+61.14%"),
    createData('Worst Case', "-46.31%")
]

const CustomCard = styled(Card)`
    margin: .5em ;
`;



class Results extends Component {

    componentDidMount(){
        const { assessRisk} = this.props; 
        assessRisk(); 
    }

    render() {
        const {  restart, values} = this.props; 
        return (
                <React.Fragment>
                    <StylesProvider injectFirst>
                <div className="cardContainer"> 
                <CustomCard variant="outlined">
                    <CardContent className={values.riskAssessment === "Conservative" ? "riskResult" : "notResult"}>
                    <div className="colorBar">
                    </div>
                    </CardContent >
                    <CardContent >
                    <Typography>
                        {values.riskAssessment === "Conservative" && <h4 className="recAlert"> <CheckIcon/> Recommended Result </h4>}
                        </Typography>
                        <Typography>
                            <h1>Conservative </h1>
                        </Typography>
                        <br/>
                        <Typography>
                            60% Stock     |     40% Bonds
                        </Typography>
                        <br/>
                        <Typography>
                            A small amount of Risk with lower  potential return
                        </Typography>
                        <br/>
                        <Typography>
                            Historical Index Returns
                        </Typography>
                        <TableContainer component="Paper">
                        <Table>
                            <TableBody>
                                {conservativeRows.map((row)=> (
                                    <TableRow key={conservativeRows.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.gains}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CustomCard>
                <CustomCard variant="outlined">
                <CardContent className={values.riskAssessment === "Moderate" ? "riskResult" : "notResult"}>
                    <div className="colorBar">
                    </div>
                    </CardContent >
                    <CardContent>
                        <Typography>
                        {values.riskAssessment === "Moderate" && <h4 className="recAlert"> <CheckIcon/> Recommended Result </h4>}
                        </Typography>
                        <Typography>
                            <h1>Moderate</h1>
                        </Typography>
                        <br/>
                        <Typography>
                            80% Stock     |     20% Bonds
                        </Typography>
                        <br/>
                        <Typography>
                            A moderate amount of Risk to seek an average potential return
                        </Typography>
                        <br/>
                        <Typography>
                            Historical Index Returns
                        </Typography>
                        <TableContainer className="tableContainer" component="paper">
                        <Table>
                            <TableBody>
                                {moderateRows.map((row)=> (
                                    <TableRow key={moderateRows.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.gains}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CustomCard>
                <CustomCard variant="outlined">
                    <CardContent className={values.riskAssessment === "Aggressive" ? "riskResult" : "notResult"}>
                    <div className="colorBar">
                    </div>
                    </CardContent >
                    <CardContent>
                    <Typography>
                        {values.riskAssessment === "Aggressive" && <h4 className="recAlert"> <CheckIcon/> Recommended Result </h4>}
                        </Typography>
                        <Typography>
                          <h1> Aggressive </h1> 
                        </Typography>
                        <br/>
                        <Typography>
                            99% Stock     |     1% Bonds
                        </Typography>
                        <br/>
                        <Typography>
                            A large amount of Risk to seek an above average potential return
                        </Typography>
                        <br/>
                        <Typography>
                            Historical Index Returns
                        </Typography>
                        <TableContainer component="paper">
                        <Table>
                            <TableBody>
                                {aggressiveRows.map((row)=> (
                                    <TableRow key={aggressiveRows.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.gains}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </CustomCard>
                </div>
                <Button variant="outlined" value='1' color="primary" onClick={restart}>
                    Restart Questionnaire 
                </Button>
                </StylesProvider>
                </React.Fragment>
                    )
    }
}

export default Results;


