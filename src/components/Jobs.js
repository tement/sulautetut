import React from "react"
import Job from "./Job.js"

function Jobs({ jobs, onCompletion }) {
  const handleCompletion = (job) => {
    onCompletion(job);
    // console.log("checkbox clicked")
  }

  const rows = () => jobs.map(job => {
    return <Job onCompletion={handleCompletion} job={job} key={job.id}/>
  })

  return(
    <div>
      {rows()}
    </div>
  )
}

export default Jobs;
