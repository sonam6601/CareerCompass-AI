import { useState } from "react";

function JobTracker() {

  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobsList")) || []
  );

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");


  const addJob = () => {

    if (!company || !role) {
      alert("Please fill all details");
      return;
    }

    const newJob = {
      company,
      role,
      status,
      date: new Date().toLocaleDateString(),
    };


    const updatedJobs = [...jobs, newJob];

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobsList",
      JSON.stringify(updatedJobs)
    );


    setCompany("");
    setRole("");

  };


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f4f7fb",
        padding:"40px",
        fontFamily:"Arial"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          color:"#2563eb"
        }}
      >
        💼 Job Application Tracker
      </h1>


      <div
        style={{
          maxWidth:"700px",
          margin:"30px auto",
          background:"white",
          padding:"30px",
          borderRadius:"15px",
          boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
        }}
      >


        <input
          placeholder="Company Name"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"15px",
            borderRadius:"8px",
            border:"1px solid #ccc"
          }}
        />


        <input
          placeholder="Job Role"
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"15px",
            borderRadius:"8px",
            border:"1px solid #ccc"
          }}
        />


        <select
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            borderRadius:"8px",
            marginBottom:"15px"
          }}
        >

          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>

        </select>


        <button
          onClick={addJob}
          style={{
            width:"100%",
            padding:"12px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Add Application
        </button>


      </div>



      <div
        style={{
          maxWidth:"700px",
          margin:"auto"
        }}
      >

        <h2>📌 My Applications</h2>


        {jobs.length === 0 ? (

          <p>No applications added yet.</p>

        ) : (

          jobs.map((job,index)=>(

            <div
              key={index}
              style={{
                background:"white",
                padding:"20px",
                marginTop:"15px",
                borderRadius:"12px",
                boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
              }}
            >

              <h3>{job.company}</h3>

              <p>
                💼 Role: {job.role}
              </p>

              <p>
                📌 Status: {job.status}
              </p>

              <p>
                📅 Date: {job.date}
              </p>


            </div>

          ))

        )}


      </div>


    </div>

  );
}


export default JobTracker;