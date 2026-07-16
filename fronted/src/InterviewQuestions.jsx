import { useState, useEffect } from "react";

function InterviewQuestions() {

  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);
  const [skills, setSkills] = useState("");

  useEffect(() => {

    const savedSkills = localStorage.getItem("resumeSkills");

    if (savedSkills) {

      const skillArray = JSON.parse(savedSkills);

      const skillText = skillArray.join(", ");

      setSkills(skillText);

      const text = skillText.toLowerCase();

      if (
        text.includes("python") ||
        text.includes("fastapi")
      ) {

        setRole("Python Developer");

      }

      else if (
        text.includes("html") ||
        text.includes("css") ||
        text.includes("javascript") ||
        text.includes("react")
      ) {

        setRole("Frontend Developer");

      }

      else if (
        text.includes("power bi") ||
        text.includes("data analysis") ||
        text.includes("sql")
      ) {

        setRole("Data Analyst");

      }

      else if (
        text.includes("aws")
      ) {

        setRole("Cloud Engineer");

      }

      else {

        setRole("");

      }

    }

  }, []);

  const generateQuestions = () => {

    let result = [];
        if (role === "Python Developer") {

      result = [
        "What is Python?",
        "Difference between List and Tuple?",
        "Explain OOP concepts in Python.",
        "What is Exception Handling?",
        "What is FastAPI?",
        "What is a Lambda Function?",
        "Difference between List and Set?",
        "What are Python Modules?",
        "What is a Virtual Environment?",
        "How do you handle file operations in Python?"
      ];

    }

    else if (role === "Frontend Developer") {

      result = [
        "What is HTML5?",
        "Difference between HTML and HTML5?",
        "What is CSS Flexbox?",
        "Difference between Flexbox and Grid?",
        "What is JavaScript?",
        "Difference between var, let and const?",
        "What is React?",
        "What are React Hooks?",
        "Explain useState and useEffect.",
        "What is JSX?"
      ];

    }

    else if (role === "Data Analyst") {

      result = [
        "What is SQL?",
        "Difference between INNER JOIN and LEFT JOIN?",
        "What is Power BI?",
        "What is Data Cleaning?",
        "What is ETL?",
        "What is a Dashboard?",
        "What is KPI?",
        "Difference between COUNT and COUNT(*)?",
        "Explain Pivot Table.",
        "What is Data Visualization?"
      ];

    }

    else if (role === "Cloud Engineer") {

      result = [
        "What is AWS?",
        "What is Amazon EC2?",
        "What is Amazon S3?",
        "What is IAM?",
        "Difference between EC2 and Lambda?",
        "What is Auto Scaling?",
        "What is an Availability Zone?",
        "What is a VPC?",
        "What is CloudWatch?",
        "Explain Load Balancer."
      ];

    }

    else {

      result = [
        "No interview questions available. Please upload your resume first."
      ];

    }

    setQuestions(result);

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

      <h1>🎤 AI Interview Questions</h1>

      <p>Role detected from your resume skills.</p>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          display: "inline-block",
          width: "500px",
        }}
      >

        <h3>Detected Role</h3>

        <h2 style={{ color: "#2563eb" }}>
          {role || "No Role Detected"}
        </h2>

        <h4>Your Skills</h4>

        <p>{skills || "No skills found"}</p>

        <button
          onClick={generateQuestions}
          style={{
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Generate Questions
        </button>
                {questions.length > 0 && (

          <div
            style={{
              marginTop: "30px",
              background: "#f8fafc",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "left",
            }}
          >

            <h2>Interview Questions</h2>

            {questions.map((q, index) => (

              <p
                key={index}
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                }}
              >
                <strong>{index + 1}.</strong> {q}
              </p>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

export default InterviewQuestions;