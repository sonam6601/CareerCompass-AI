import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumeAnalyzer() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState("");
  const [skills, setSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);



  const handleUpload = async () => {

    if (!file) {
      setMessage("Please select your resume first.");
      return;
    }


    const formData = new FormData();

    formData.append("file", file);



    try {

      const response = await fetch(
        https://careercompass-ai-3lln.onrender.com
        {
          method: "POST",
          body: formData,
        }
      );


      const data = await response.json();



      setMessage(data.message);

      setResumeText(data.resume_text);

      setScore(data.score);

      setSkills(data.skills);

      setSuggestions(data.suggestions);



      localStorage.setItem(
        "resumeScore",
        data.score
      );


      localStorage.setItem(
        "skillsCount",
        data.skills.length
      );


      localStorage.setItem(
        "resumeSkills",
        JSON.stringify(data.skills)
      );



    } catch(error) {

      console.error(error);

      setMessage("Server Error");

    }

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


      <h1>📄 Resume Analyzer</h1>


      <p>
        Upload your resume and get AI-based improvement suggestions.
      </p>



      <div
        style={{
          background:"white",
          padding:"30px",
          borderRadius:"15px",
          marginTop:"30px",
          display:"inline-block",
          width:"70%",
        }}
      >



        <input
          type="file"
          accept=".pdf"
          onChange={(e)=>setFile(e.target.files[0])}
        />



        <br/><br/>



        <button
          onClick={handleUpload}
          style={{
            padding:"12px 25px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer",
          }}
        >
          Upload Resume
        </button>



        <h3>{message}</h3>




        {score && (

          <h2>
            📊 Resume Score: {score}/100
          </h2>

        )}





        {skills.length > 0 && (

          <div>

            <h3>🛠 Skills Found:</h3>


            {skills.map((skill,index)=>(

              <p key={index}>
                ✅ {skill}
              </p>

            ))}


          </div>

        )}





        {suggestions.length > 0 && (

          <div>

            <h3>💡 Suggestions:</h3>


            {suggestions.map((item,index)=>(

              <p key={index}>
                ⚠️ {item}
              </p>

            ))}


          </div>

        )}






        {skills.length > 0 && (

          <button
            onClick={()=>navigate("/career")}
            style={{
              padding:"12px 25px",
              background:"#16a34a",
              color:"white",
              border:"none",
              borderRadius:"8px",
              cursor:"pointer",
              marginTop:"20px",
            }}
          >
            🚀 Get Career Recommendation
          </button>

        )}






        {resumeText && (

          <div
            style={{
              marginTop:"20px",
              textAlign:"left",
              background:"#f1f5f9",
              padding:"20px",
              borderRadius:"10px",
            }}
          >

            <h3>Resume Preview:</h3>


            <p
              style={{
                whiteSpace:"pre-wrap",
                wordBreak:"break-word",
                lineHeight:"1.8",
              }}
            >
              {resumeText}
            </p>


          </div>

        )}



      </div>


    </div>

  );

}


export default ResumeAnalyzer;