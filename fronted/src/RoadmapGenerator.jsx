import { useEffect, useState } from "react";

function RoadmapGenerator() {
  const [career, setCareer] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {
    const savedCareer =
      localStorage.getItem("careerGoal") || "Frontend Developer";

    setCareer(savedCareer);

    generateRoadmap(savedCareer);
  }, []);

  const generateRoadmap = (goal) => {
    const text = goal.toLowerCase();

    if (text.includes("data")) {
      setRoadmap([
        "📘 Learn Excel",
        "🗄 Learn SQL",
        "🐍 Learn Python",
        "📊 Learn Power BI",
        "📂 Build 5 Data Analysis Projects",
        "💼 Apply for Data Analyst Jobs",
      ]);
    } else if (
      text.includes("frontend") ||
      text.includes("react")
    ) {
      setRoadmap([
        "🌐 Learn HTML",
        "🎨 Learn CSS",
        "⚡ Learn JavaScript",
        "⚛ Learn React",
        "📂 Build 5 Frontend Projects",
        "🚀 Deploy Projects on GitHub & Vercel",
      ]);
    } else if (
      text.includes("python")
    ) {
      setRoadmap([
        "🐍 Master Python",
        "⚡ Learn FastAPI/Django",
        "🗄 Learn SQL",
        "📂 Build Backend Projects",
        "☁ Deploy API",
        "💼 Apply for Python Developer Jobs",
      ]);
    } else {
      setRoadmap([
        "📚 Learn Core Skills",
        "💻 Build Projects",
        "🏆 Complete Certifications",
        "📂 Upload Projects on GitHub",
        "💼 Apply for Internships",
      ]);
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
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2563eb" }}>
          🗺 AI Career Roadmap
        </h1>

        <h3 style={{ textAlign: "center" }}>
          Career Goal: {career}
        </h3>

        <div style={{ marginTop: "30px" }}>
          {roadmap.map((step, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "12px",
                borderRadius: "10px",
                background: "#eff6ff",
                fontSize: "18px",
              }}
            >
              {index + 1}. {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapGenerator;