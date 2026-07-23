import { useState } from "react";

function CareerQuiz() {
  const questions = [
    {
      question: "Which activity do you enjoy the most?",
      options: [
        "Analyzing data",
        "Designing websites",
        "Solving coding problems",
        "Managing people",
      ],
    },
    {
      question: "Which subject do you like?",
      options: [
        "Mathematics",
        "Computer Science",
        "Business",
        "Design",
      ],
    },
    {
      question: "What is your preferred work style?",
      options: [
        "Research",
        "Creativity",
        "Programming",
        "Leadership",
      ],
    },
    {
      question: "Which tool would you like to use?",
      options: [
        "Power BI",
        "React",
        "Python",
        "Excel",
      ],
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState("");

  const handleSelect = (index, value) => {
    const temp = [...answers];
    temp[index] = value;
    setAnswers(temp);
  };

  const submitQuiz = () => {
    let recommendation = "Software Developer";

    const allAnswers = answers.join(" ").toLowerCase();

    if (allAnswers.includes("data") || allAnswers.includes("power bi")) {
      recommendation = "Data Analyst";
    } else if (allAnswers.includes("react") || allAnswers.includes("website")) {
      recommendation = "Frontend Developer";
    } else if (allAnswers.includes("python")) {
      recommendation = "Python Developer";
    } else if (allAnswers.includes("leadership")) {
      recommendation = "Project Manager";
    }

    setResult(recommendation);
    localStorage.setItem("careerGoal", recommendation);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2563eb" }}>
        🎯 AI Career Quiz
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        {questions.map((q, index) => (
          <div key={index} style={{ marginBottom: "25px" }}>
            <h3>{q.question}</h3>

            <select
              value={answers[index]}
              onChange={(e) => handleSelect(index, e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            >
              <option value="">Select</option>

              {q.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          onClick={submitQuiz}
          style={{
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Quiz
        </button>

        {result && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#eef4ff",
              borderRadius: "10px",
            }}
          >
            <h2>Recommended Career</h2>
            <h3 style={{ color: "#2563eb" }}>{result}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerQuiz;