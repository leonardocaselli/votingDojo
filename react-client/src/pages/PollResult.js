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
            // console.log(Poll)
            setPollUpdatedPoll({ question, options, votes, number_of_votes })

        }
        fetchData()
    }, [_id])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center' }} variant="h3">
                            Voting Dojo
                        </Typography>
                    </Paper>
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center', margin: 15 }} variant="h4">
                            {updatedPoll.question}
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
export default PollResult