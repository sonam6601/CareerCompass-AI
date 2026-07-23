import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SkillAnalysis() {

  const navigate = useNavigate();

  const [skills, setSkills] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const savedSkills = localStorage.getItem("resumeSkills");

    if (savedSkills) {

      const skillArray = JSON.parse(savedSkills);

      setSkills(skillArray.join(", "));

    }

  }, []);

  const analyzeSkills = () => {

    const userSkills = skills.toLowerCase();

    let gaps = [];

    let tips = [];

    const requiredSkills = [
      "python",
      "sql",
      "react",
      "javascript",
      "html",
      "css",
      "git",
      "github",
      "aws",
      "machine learning",
      "communication"
    ];

    requiredSkills.forEach((skill) => {

      if (!userSkills.includes(skill)) {

        gaps.push(skill);

      }

    });

    if (gaps.length > 0) {

      tips.push("Improve your missing technical skills.");
      tips.push("Build more projects and upload them on GitHub.");
      tips.push("Complete certifications related to your career goal.");

    }
    else {

      tips.push("Great! Your skill set is well balanced.");

    }

    setMissingSkills(gaps);
    setSuggestions(tips);

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >

      <h1>🧠 Skill Analysis</h1>

      <p>
        Analyze your resume skills and find improvement areas.
      </p>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          display: "inline-block",
          width: "500px",
        }}
      >

        <h3>Your Skills:</h3>

        <p>{skills || "No skills found"}</p>

        <button
          onClick={analyzeSkills}
          style={{
            padding: "12px 25px",
            background: "#9333ea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Analyze Skills
        </button>

        {missingSkills.length > 0 && (

          <div style={{ marginTop: "20px" }}>

            <h2>⚠️ Skill Gaps:</h2>

            {missingSkills.map((skill, index) => (

              <p key={index}>
                ❌ {skill}
              </p>

            ))}

          </div>

        )}

        {suggestions.length > 0 && (

          <div style={{ marginTop: "20px" }}>

            <h2>💡 Suggestions:</h2>

            {suggestions.map((item, index) => (

              <p key={index}>
                ✅ {item}
              </p>

            ))}

          </div>

        )}

        {suggestions.length > 0 && (

          <button
            onClick={() => navigate("/jobs")}
            style={{
              padding: "12px 25px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            🚀 Next: Job Recommendation
          </button>

        )}

      </div>

    </div>

  );

}

export default SkillAnalysis;