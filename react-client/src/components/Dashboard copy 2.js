import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

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
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{ margin: 5 }}>
                        <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h5">
                            Top 3 Polls
                        </Typography>
                    </Paper>

                    <Paper style={{ margin: 5 }}>xs=6 top 3</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={{ margin: 5 }}>
                        <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h5">
                            Recent Polls
                        </Typography>
                    </Paper>
                    {pollTop3.map((Top, key) => {
                        return (
                            <Paper style={{ margin: 5 }} key={Top._id}>
                                <Link to={`/polls/${Top._id}`}>{Top.question}</Link>
                            </Paper>
                        )
                    })}
                    <Paper style={{ margin: 5 }}>xs=6 Recent Polls</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard