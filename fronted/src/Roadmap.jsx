import { useNavigate } from "react-router-dom";

function Roadmap() {
  const navigate = useNavigate();

  const careerGoal =
    localStorage.getItem("careerGoal") || "Frontend Developer";

  const roadmap = [
    "📘 Learn the Basics",
    "💻 Build 5 Real Projects",
    "📂 Upload Projects on GitHub",
    "📄 Create an ATS Friendly Resume",
    "🎯 Practice DSA & Aptitude",
    "🎤 Prepare for Mock Interviews",
    "🏆 Complete Certifications",
    "💼 Apply for Internships & Jobs",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        🗺️ AI Career Roadmap
      </h1>

      <h2>
        Career Goal: {careerGoal}
      </h2>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        {roadmap.map((step, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              margin: "10px 0",
              borderLeft: "5px solid #2563eb",
              background: "#eef4ff",
              borderRadius: "8px",
            }}
          >
            <strong>
              Step {index + 1}
            </strong>

            <p>{step}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}

export default Roadmap;