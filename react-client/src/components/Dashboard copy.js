import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';












const Dashboard = ({ allPolls = {}, pollTop3 = {} }) => {

    console.log("Dashboard ", allPolls)
    console.log("Dashboard top3 ", pollTop3)



    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >xs=6</Paper>
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