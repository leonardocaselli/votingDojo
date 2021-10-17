import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'



const VotePoll = () => {
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


    const onClickHandler = async (optionPosition) => {
        console.log("optionPosition", optionPosition)
        // setPollUpdatedPoll.votes[optionPosition] = updatedPoll.votes[optionPosition] + 1
        // setPollUpdatedPoll.number_of_votes = updatedPoll.number_of_votes + 1
        const votes = updatedPoll.votes
        votes[optionPosition] += 1
        const number_of_votes = updatedPoll.number_of_votes + 1
        console.log("updatedPoll: ", votes, number_of_votes)
        try {

            // await axios.put(`http://localhost:8000/api/poll/update/${_id}`, updatedPoll)
            await axios.patch(`http://localhost:8000/api/poll/vote/${_id}`, {
                votes,
                number_of_votes
            })
            history.push(`/polls/${_id}`)
        } catch (error) {
            console.log(error)
        }
    }
    if (!updatedPoll) return <h3>Loading.....</h3>

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
                {updatedPoll.options.map((option, key) => {
                    return (
                        <Grid item xs={6} key={key}>
                            <Paper >
                                <Typography style={{ flexGrow: 1, textAlign: 'center', margin: 15 }} variant="h6">
                                    {option}: key= {key}
                                </Typography>

                                <p> <button onClick={() => onClickHandler(key)}  > vote for {option} </button>  </p>
                            </Paper>
                        </Grid>
                    )
                })}


            </Grid>
        </div>
    )
}
export default VotePoll