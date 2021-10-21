import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'


const PollResult = () => {
    const [updatedPoll, setPollUpdatedPoll] = useState()
    const { _id } = useParams()
    const history = useHistory()

    useEffect(() => {
        const fetchData = async () => {
            const {
                data: {
                    poll: { question, options, votes, number_of_votes }
                }
            } = await axios.get(`http://localhost:8000/api/poll/${_id}`)

            setPollUpdatedPoll({ question, options, votes, number_of_votes })
            console.log("console log data ......")
            console.log(question, options, votes, number_of_votes)
        }
        fetchData()
    }, [_id])

    if (!updatedPoll) return <h3> Loading...........</h3 >
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h3">
                            Voting Dojo
                        </Typography>
                    </Paper>
                    {updatedPoll.question},options :{updatedPoll.options},votes: {updatedPoll.votes},number_of_votes:{updatedPoll.number_of_votes}
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center', margin: 15 }} variant="h4">
                            {updatedPoll.question}
                        </Typography>
                    </Paper>
                    <Paper>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
export default PollResult