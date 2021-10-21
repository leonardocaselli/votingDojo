import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'



import { Link } from 'react-router-dom'
const Dashboard = ({ allPolls = {}, pollTop3 = {} }) => {

    console.log("Dashboard ", allPolls)
    console.log("Dashboard top3 ", pollTop3)



    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h3">
                            Voting Dojo
                        </Typography>
                    </Paper>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{ margin: 5 }}
                        href={`/polls/new`}>
                        Create your own poll
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
                        Top 3 polls
                    </Typography>
                    <TableContainer item xs={6}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Question</TableCell>
                                    <TableCell> number of votes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pollTop3.map((top, key) => {
                                    return (
                                        < TableRow key={key} >
                                            <TableCell><Link to={`/polls/${top._id}/vote`}>{top.question}</Link></TableCell>
                                            <TableCell> {top.number_of_votes} </TableCell>
                                        </TableRow>
                                    )
                                }
                                )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>



                <Grid item xs={6}>
                    <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h6">
                        Recent polls
                    </Typography>

                    <TableContainer item xs={6}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Question</TableCell>
                                    <TableCell> Recent Polls</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allPolls.map((poll, key) => {
                                    return (
                                        < TableRow key={key} >
                                            <TableCell><Link to={`/polls/${poll._id}/vote`}>{poll.question}</Link></TableCell>
                                            <TableCell> {poll.updatedAt} </TableCell>

                                        </TableRow>
                                    )
                                }
                                )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard