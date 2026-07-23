import { useState } from "react";

function ChatAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "👋 Hello! I am your AI Career Assistant. Ask me anything about careers, resumes, interviews, or skills."
  );

  const getAnswer = () => {
    const q = question.toLowerCase().trim();

    if (q.includes("python")) {
      setAnswer(
        "Learn Python basics, OOP, File Handling, NumPy, Pandas, and build 3-5 projects before applying for internships."
      );
    } else if (q.includes("resume")) {
      setAnswer(
        "Keep your resume to one page, add projects, internships, GitHub, LinkedIn, certifications, and measurable achievements."
      );
    } else if (q.includes("interview")) {
      setAnswer(
        "Practice DSA, aptitude, HR questions, and explain your projects confidently."
      );
    } else if (q.includes("data analyst")) {
      setAnswer(
        "Learn Excel, SQL, Power BI, Python, Pandas, Statistics, and build dashboard projects."
      );
    } else if (q.includes("web development")) {
      setAnswer(
        "Start with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and create MERN projects."
      );
    } else if (q.includes("skill")) {
      setAnswer(
        "Focus on problem solving, communication, Git, GitHub, SQL, and one programming language."
      );
    } else {
      setAnswer(
        "I'm still learning. Try asking about resume, Python, interviews, web development, data analyst, or skills."
      );
    }
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
        🤖 AI Career Chat Assistant
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <textarea
          rows="4"
          placeholder="Ask your career question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        />

        <button
          onClick={getAnswer}
          style={{
            marginTop: "15px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ask AI
        </button>

        <div
          style={{
            marginTop: "25px",
            background: "#eef4ff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>AI Response</h3>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;