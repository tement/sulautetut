import React from "react";

function Job({ job }) {
  return(
    <table>
      <tbody>
        <tr>
          <td width="2%"><input type="checkbox"></input></td>
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
