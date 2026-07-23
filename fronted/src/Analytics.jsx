import { useEffect, useState } from "react";

function Analytics() {
  const [data, setData] = useState({
    resumeScore: 100,
    skills: 8,
    career: "Data Analyst",
    courses: 3,
    interviews: 1,
    jobs: 12,
  });

  useEffect(() => {
    setData({
      resumeScore: Number(localStorage.getItem("resumeScore") || "100"),
      skills: Number(localStorage.getItem("skillsCount") || "8"),
      career: localStorage.getItem("careerGoal") || "Data Analyst",
      courses: 3,
      interviews: 1,
      jobs: 12,
    });
  }, []);

  const Card = ({ title, value, color }) => (
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h1 style={{ color }}>{value}</h1>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "30px",
        }}
      >
        📊 Analytics Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="📄 Resume Score"
          value={`${data.resumeScore}/100`}
          color="#2563eb"
        />

        <Card
          title="🛠 Skills"
          value={data.skills}
          color="#16a34a"
        />

        <Card
          title="🎯 Career Goal"
          value={data.career}
          color="#9333ea"
        />

        <Card
          title="📚 Courses"
          value={data.courses}
          color="#ea580c"
        />

        <Card
          title="🎤 Interviews"
          value={data.interviews}
          color="#dc2626"
        />

        <Card
          title="💼 Jobs"
          value={data.jobs}
          color="#0891b2"
        />
      </div>

      <div
        style={{
          background: "white",
          marginTop: "35px",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2>📈 Career Progress</h2>

        <div
          style={{
            width: "100%",
            height: "20px",
            background: "#e5e7eb",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              width: `${data.resumeScore}%`,
              height: "100%",
              background: "linear-gradient(90deg,#22c55e,#2563eb)",
            }}
          />
        </div>

        <h3
          style={{
            marginTop: "15px",
            color: "#2563eb",
          }}
        >
          {data.resumeScore}% Career Ready
        </h3>
      </div>
    </div>
  );
}

export default Analytics;