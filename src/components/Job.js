import React, {useState} from "react";

function Job({ job, onCompletion }) {
  const handleCompletion = () => {
    onCompletion(job);
  }

  const getStyle = (complete) => ({
    // background: "#f4f4f4",
    textDecoration: complete ? "line-through" : "none"
  })

  return(
    <table key={job.id} style={getStyle(job.completed)}>
      <tbody>
        <tr>
          <td width="2%"><input type="checkbox" defaultChecked={job.completed} onChange={handleCompletion}></input></td>
          <td width="62%">{job.tyotehtava}</td>
          <td width="20%">{job.osoite}</td>
          <td width="10%">
            <button onclick="window.location.href={job.linkki}">
              lisätietoa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Job;
