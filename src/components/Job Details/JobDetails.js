import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import axios from "axios"
import JobCard from "./JobCard"
import { Spinner } from "react-bootstrap"

export default function JobDetails() {
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const params = useParams()
    const [jobDetails, setJobDetails] = useState(location?.state?.jobDetails)

    const createJobDetails = async () => {  
        const jobUrl = `https://api.lever.co/v0/postings/hopper/${params.id}/?mode=json`
        setLoading(true)
        try{
            const response = await axios.get(jobUrl)
            const data = await response.data
            setJobDetails(data)
        }catch(err){
            console.log(err.message)
        }
        setLoading(false)
      }

    useEffect(()=>{
        createJobDetails()
    },[])

    return(
        <>
            {
                loading 
                ? <Spinner
                        as="span"
                        variant="succcess"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                        />
                : <JobCard job={jobDetails}/>
            }
            
        </>
    )
}