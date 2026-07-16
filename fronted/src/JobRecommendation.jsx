import { useState, useEffect } from "react";


function JobRecommendation() {


  const [skills, setSkills] = useState("");

  const [jobs, setJobs] = useState([]);





  useEffect(() => {


    const savedSkills = localStorage.getItem("resumeSkills");


    if(savedSkills){


      const skillArray = JSON.parse(savedSkills);


      setSkills(skillArray.join(", "));


    }


  }, []);







  const findJobs = () => {


    const skillText = skills.toLowerCase();


    let result = [];





    if(
      skillText.includes("python") ||
      skillText.includes("django") ||
      skillText.includes("fastapi")
    ){

      result.push("🐍 Python Developer");

      result.push("⚡ Backend Developer");

    }







    if(
      skillText.includes("react") ||
      skillText.includes("javascript") ||
      skillText.includes("html") ||
      skillText.includes("css")
    ){

      result.push("💻 Frontend Developer");

      result.push("⚛️ React Developer");

    }







    if(
      skillText.includes("node") ||
      skillText.includes("mongodb") ||
      skillText.includes("mern")
    ){

      result.push("🌐 MERN Stack Developer");

      result.push("💼 Full Stack Developer");

    }







    if(
      skillText.includes("sql") ||
      skillText.includes("power bi") ||
      skillText.includes("data analysis")
    ){

      result.push("📊 Data Analyst");

      result.push("📈 Business Intelligence Analyst");

    }







    if(
      skillText.includes("aws")
    ){

      result.push("☁️ AWS Cloud Engineer");

      result.push("🔧 Cloud Developer");

    }







    if(
      skillText.includes("git") ||
      skillText.includes("github")
    ){

      result.push("👨‍💻 Software Developer");

    }







    if(result.length === 0){

      result.push(
        "Add more technical skills to find suitable jobs."
      );

    }





    setJobs([...new Set(result)]);


  };








  return (



    <div

      style={{

        minHeight:"100vh",

        background:"#f4f7fb",

        padding:"40px",

        fontFamily:"Arial",

        textAlign:"center",

      }}

    >




      <h1>
        💼 Job Recommendation
      </h1>




      <p>
        Find suitable jobs based on your resume skills.
      </p>






      <div

        style={{

          background:"white",

          padding:"30px",

          borderRadius:"15px",

          display:"inline-block",

          width:"400px",

        }}

      >





        <h3>
          Your Skills:
        </h3>




        <p>
          {skills || "No skills found"}
        </p>





        <button

          onClick={findJobs}

          style={{

            padding:"12px 25px",

            background:"#f59e0b",

            color:"white",

            border:"none",

            borderRadius:"8px",

            cursor:"pointer",

          }}

        >

          🔍 Find Jobs

        </button>







        {
          jobs.length > 0 && (


            <div style={{marginTop:"30px"}}>


              <h2>
                Recommended Jobs
              </h2>




              {
                jobs.map((job,index)=>(


                  <p key={index}>

                    {job}

                  </p>


                ))
              }





            </div>


          )
        }






      </div>





    </div>


  );

}


export default JobRecommendation;