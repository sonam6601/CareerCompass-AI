import { useState, useEffect } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    career: "",
    score: "",
    skills: [],
  });

  useEffect(() => {
    setProfile({
      name: localStorage.getItem("userName") || "Sonam Singh",
      email: localStorage.getItem("userEmail") || "admin@gmail.com",
      career: localStorage.getItem("careerGoal") || "Data Analyst",
      score: localStorage.getItem("resumeScore") || "100",
      skills: [
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "React"
      ],
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "30px",
          }}
        >
          👤 My Profile
        </h1>

        <InfoRow title="👤 Name" value={profile.name} />
        <InfoRow title="📧 Email" value={profile.email} />
        <InfoRow title="🎯 Career Goal" value={profile.career} />
        <InfoRow title="📊 Resume Score" value={`${profile.score}/100`} />

        <div style={{ marginTop: "25px" }}>
          <h3>🛠 Skills</h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✏ Edit Profile
        </button>
      </div>
    </div>
  );
}

function InfoRow({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  );
}

export default Profile;