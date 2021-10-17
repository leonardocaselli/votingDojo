import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard'


const Polls = () => {
    const [allPolls, setAllPolls] = useState()
    const [pollTop3, setPollTop3] = useState()
    useEffect(() => {
        const fecthData = async () => {
            const {
                data: { polls }
            } = await axios.get(`http://localhost:8000/api/poll`)
            // console.log("orden mas nuevo updata : ", polls)
            setAllPolls(polls)
        }
        const fecthDataTop = async () => {
            const {
                data: { polls }
            } = await axios.get(`http://localhost:8000/api/poll/top`)
            // console.log("top 3 : ", polls)
            setPollTop3(polls)
        }

        fecthData()
        fecthDataTop()
    }, [])
    if (!allPolls) return <h3> Loading...........</h3 >
    return (
        <div>
            <Dashboard allPolls={allPolls} pollTop3={pollTop3} />
        </div>
    )

}
export default Polls