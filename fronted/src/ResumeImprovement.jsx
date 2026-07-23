import { useEffect, useState } from "react";

function ResumeImprovement() {

  const [score, setScore] = useState(0);
  const [tips, setTips] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);


  useEffect(() => {

    const resumeScore =
      localStorage.getItem("resumeScore") || "78";

    setScore(resumeScore);


    setMissingSkills([
      "SQL",
      "Power BI",
      "Git & GitHub",
      "Real World Projects"
    ]);


    setTips([
      "Add more technical skills in your resume.",
      "Include project details with technologies used.",
      "Add GitHub and LinkedIn profile links.",
      "Use action words in your experience section.",
      "Make your resume ATS friendly."
    ]);


  }, []);



  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f4f7fb",
        padding:"40px",
        fontFamily:"Arial"
      }}
    >


      <div
        style={{
          maxWidth:"800px",
          margin:"auto"
        }}
      >


        <h1
          style={{
            textAlign:"center",
            color:"#2563eb"
          }}
        >
          🤖 AI Resume Improvement
        </h1>



        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            marginTop:"30px",
            boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
          }}
        >

          <h2>
            📊 Resume Score
          </h2>


          <h1
            style={{
              color:"#2563eb"
            }}
          >
            {score}/100
          </h1>


        </div>





        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            marginTop:"20px",
            boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
          }}
        >

          <h2>
            ⚠️ Missing Skills
          </h2>


          {missingSkills.map((skill,index)=>(

            <p
              key={index}
              style={{
                background:"#eff6ff",
                padding:"12px",
                borderRadius:"10px"
              }}
            >
              ❌ {skill}
            </p>

          ))}


        </div>





        <div
          style={{
            background:"white",
            padding:"25px",
            borderRadius:"20px",
            marginTop:"20px",
            boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
          }}
        >

          <h2>
            ✅ Improvement Suggestions
          </h2>


          {tips.map((tip,index)=>(

            <p
              key={index}
              style={{
                background:"#f0fdf4",
                padding:"12px",
                borderRadius:"10px"
              }}
            >
              {index+1}. {tip}
            </p>

          ))}


        </div>



      </div>


    </div>

  );

}


export default ResumeImprovement;