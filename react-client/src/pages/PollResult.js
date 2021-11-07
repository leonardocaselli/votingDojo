import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button, Box } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';

import Grafico from '../components/Grafico';
const PollResult = () => {
    const [updatedPoll, setPollUpdatedPoll] = useState()
    const [pivot, setPivot] = useState()
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
            //setPivot({ ...updatedPoll.options, ...updatedPoll.votes })
            //console.log("Pivot :", pivot)
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
                        <Box component="div">
                            <Button
                                href="/"
                                variant="contained"
                                color="primary"
                                startIcon={<HomeIcon />}
                            >
                                {/* <HomeIcon /> */}

                                Home
                            </Button>
                        </Box>
                    </Paper>
                    {/* {updatedPoll.question},options :{updatedPoll.options},votes: {updatedPoll.votes},number_of_votes:{updatedPoll.number_of_votes} */}
                    <Paper >
                        <Typography style={{ flexGrow: 1, textAlign: 'center', margin: 15 }} variant="h4">
                            {updatedPoll.question}
                        </Typography>

                    </Paper>
                    <Paper>
                        <div>
                            {/* <Box component="div" display="inline">
                                {updatedPoll.options.map((option, key) => {
                                    return (
                                        <span key={key}>  option: {option} </span>
                                    )
                                })}
                            </Box>
                            <Box component="div" display="inline">
                                {updatedPoll.votes.map((vote, key) => {
                                    return (
                                        <span key={key}>  vote: {vote} </span>
                                    )
                                })}
                            </Box> */}
                        </div>
                        <div>
                            {/* {updatedPoll.options[0]}: n1: {updatedPoll.votes[0]} */}
                            {
                                !updatedPoll.options[0] ? <span></span> : <span> {updatedPoll.options[0]}: n0: {updatedPoll.votes[0]}   </span>
                            }
                        </div>
                        <div>
                            {/* {updatedPoll.options[1]}: n2: {updatedPoll.votes[1]} */}
                            {
                                !updatedPoll.options[1] ? <span></span> : <span> {updatedPoll.options[1]}: n1: {updatedPoll.votes[1]}   </span>
                            }
                        </div>
                        <div>
                            {/* {updatedPoll.options[2]}: n3: {updatedPoll.votes[2]} */}
                            {
                                !updatedPoll.options[2] ? <span></span> : <span> {updatedPoll.options[2]}: n2: {updatedPoll.votes[2]}   </span>
                            }
                        </div>
                        <div>
                            {/* {updatedPoll.options[3]}: n4: {updatedPoll.votes[3]} */}
                            {
                                !updatedPoll.options[3] ? <span></span> : <span> {updatedPoll.options[3]}: n3: {updatedPoll.votes[3]}   </span>
                            }
                        </div>
                        <Box display="inline"> grid 1
                            <Grafico labels={updatedPoll.options} datas={updatedPoll.votes} />
                        </Box>
                        <Box display="inline">grid 2 </Box>

                    </Paper>
                </Grid>

            </Grid>
        </div >
    )
}
export default PollResult