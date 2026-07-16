import { useState, useEffect } from "react";


function CareerRecommendation() {


  const [skills, setSkills] = useState("");

  const [careers, setCareers] = useState([]);




  useEffect(() => {


    const savedSkills = localStorage.getItem("resumeSkills");


    if(savedSkills){

      const skillArray = JSON.parse(savedSkills);

      setSkills(skillArray.join(", "));

    }


  }, []);






  const findCareer = () => {


    const skillText = skills.toLowerCase();


    let result = [];




    if(
      skillText.includes("python") ||
      skillText.includes("data analysis") ||
      skillText.includes("machine learning")
    ){

      result.push("📊 Data Analyst");

      result.push("🐍 Python Developer");

      result.push("🤖 Machine Learning Engineer");

    }






    if(
      skillText.includes("html") ||
      skillText.includes("css") ||
      skillText.includes("javascript") ||
      skillText.includes("react")
    ){

      result.push("💻 Frontend Developer");

      result.push("⚛️ React Developer");

    }






    if(
      skillText.includes("node") ||
      skillText.includes("mongodb") ||
      skillText.includes("mern")
    ){

      result.push("🌐 Full Stack Developer");

    }






    if(
      skillText.includes("sql") ||
      skillText.includes("power bi")
    ){

      result.push("📈 Business Intelligence Analyst");

    }






    if(skillText.includes("aws")){


      result.push("☁️ Cloud Engineer");


    }






    if(result.length === 0){


      result.push(
        "Software Developer"
      );


    }





    const uniqueCareer = [...new Set(result)];



    setCareers(uniqueCareer);




    // Save Career Goal for Dashboard

    localStorage.setItem(

      "careerGoal",

      uniqueCareer[0]

    );


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
        🎯 Career Recommendation
      </h1>



      <p>
        Get career suggestions based on your resume skills.
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





        <input

          type="text"

          value={skills}

          onChange={(e)=>setSkills(e.target.value)}

          placeholder="Example: Python, React, AWS"

          style={{

            padding:"12px",

            width:"90%",

            borderRadius:"8px",

            border:"1px solid #ccc",

          }}

        />





        <br/><br/>






        <button

          onClick={findCareer}

          style={{

            padding:"12px 25px",

            background:"#2563eb",

            color:"white",

            border:"none",

            borderRadius:"8px",

            cursor:"pointer",

          }}

        >

          🚀 Get Recommendation

        </button>







        {
          careers.length > 0 && (


            <div style={{marginTop:"25px"}}>


              <h2>
                Recommended Careers:
              </h2>



              {
                careers.map((career,index)=>(

                  <p key={index}>

                    {career}

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



export default CareerRecommendation;