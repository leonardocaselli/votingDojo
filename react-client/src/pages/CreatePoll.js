import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'



import { Link } from 'react-router-dom'


//import validateForm from '../contexts/validateForm'
const CreatePoll = () => {


    const [newPoll, setNewPoll] = useState({})
    const [questionForm, setQuestionForm] = useState({})
    const [optionForm, setOptionForm] = useState({})

    const [formErrors, setFormErrors] = useState({})  //del server Express
    const [formErrorsR, setFormErrorsR] = useState({}) //del cliente React
    const [buttoDisable, setButtoDisable] = useState(false)// true =bloquea el boton false=avilita 



    const history = useHistory()

    const inputErrors = Object.keys(formErrors)
    const inputErrorsR = Object.keys(formErrorsR)
    console.log("Mensage erorro inputErrors ", inputErrors)


    const onChangeHandler = ({ target: { value, name } }) => {

        // const obj = { [name]: value }
        // setNewPoll({ ...newPoll, ...obj })
        if (name === "question") {
            const obj = { [name]: value }
            setQuestionForm({ ...questionForm, ...obj })
            console.log("question :", questionForm)
        } else {
            const objOption = { [name]: value }
            setOptionForm({ ...optionForm, ...objOption })
            console.log("option", optionForm)
        }



    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const question = Object.values(questionForm).toString()
        const options = Object.values(optionForm)
        console.log(question, options)
        //Validaciones desde form 
        //se valida junto el envio del formulrio
        // const [hasError, errors] = validateForm(newPoll)
        // console.log("hasError :", hasError)
        // setFormErrorsR(errors)


        // if (hasError === false) {
        //     setButtoDisable(false)
        // }
        try {
            //await axios.post('http://localhost:8000/api/poll/new', newPoll)
            await axios.post('http://localhost:8000/api/poll/new', {
                question,
                options
            })
            history.push('/')
        }

        catch ({ response: { data } }) {
            console.log("error DAta errors :", data.errors)
            setFormErrors(data.errors)
            console.log("Error onSubmit :", formErrors)

        }
    }





    return (
        <div>
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
                        href={`/`}>
                        Back to Home
                    </Button>
                </Grid>






                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="question"> Question</label>
                        <textarea rows="5" cols="50" onChange={onChangeHandler} type="text" name="question" />
                        <p style={{ color: 'red' }}>{inputErrors.includes("question") && formErrors.question.message}</p>
                        <p style={{ color: 'red' }}>{inputErrorsR.includes("question") && formErrorsR.question}</p>
                    </div>
                    <div>
                        <label htmlFor="options1"> options 1</label>
                        <input onChange={onChangeHandler} type="text" name="options1" />
                        <p style={{ color: 'red' }}>{inputErrors.includes("type") && formErrors.options.message}</p>
                        <p style={{ color: 'red' }}>{inputErrorsR.includes("type") && formErrorsR.options}</p>
                    </div>
                    <div>
                        <label htmlFor="options2"> options 2</label>
                        <input onChange={onChangeHandler} type="text" name="options2" />
                        <p style={{ color: 'red' }}>{inputErrors.includes("type") && formErrors.options.message}</p>
                        <p style={{ color: 'red' }}>{inputErrorsR.includes("type") && formErrorsR.options}</p>
                    </div>
                    <div>
                        <label htmlFor="options3"> options 3</label>
                        <input onChange={onChangeHandler} type="text" name="options3" />
                        <p style={{ color: 'red' }}>{inputErrors.includes("type") && formErrors.options.message}</p>
                        <p style={{ color: 'red' }}>{inputErrorsR.includes("type") && formErrorsR.options}</p>
                    </div>
                    <div>
                        <label htmlFor="options4"> options 4</label>
                        <input onChange={onChangeHandler} type="text" name="options4" />
                        <p style={{ color: 'red' }}>{inputErrors.includes("type") && formErrors.options.message}</p>
                        <p style={{ color: 'red' }}>{inputErrorsR.includes("type") && formErrorsR.options}</p>
                    </div>
                    <input type="submit" value="Add Poll" disabled={buttoDisable} />
                </form>
                <p />
            </Grid>
        </div>
    )
}
export default CreatePoll