import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const resumeScore = Number(
    localStorage.getItem("resumeScore") || "0"
  );

  const skillsCount =
    localStorage.getItem("skillsCount") || "0";

  const careerGoal =
    localStorage.getItem("careerGoal") || "Not Set";

  const progress = resumeScore;

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    navigate("/");

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#eef4ff",
        padding: "35px",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          borderRadius: "22px",
          color: "white",
          padding: "35px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >

        <div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
            }}
          >
            🚀 CareerCompass AI
          </h1>

          <p
            style={{
              marginTop: "10px",
              opacity: 0.95,
            }}
          >
            Welcome back,
            <b> {email}</b>
          </p>

        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "12px 22px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            background: "white",
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>

      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow:
            "0 5px 18px rgba(0,0,0,0.08)",
        }}
      >

        <h2>📈 Career Progress</h2>

        <div
          style={{
            width: "100%",
            height: "18px",
            background: "#e5e7eb",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "15px",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg,#22c55e,#2563eb)",
            }}
          />

        </div>

        <h3
          style={{
            marginTop: "15px",
            color: "#2563eb",
          }}
        >
          {progress}% Completed
        </h3>

      </div>
            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <StatsCard
          title="📊 Resume Score"
          value={`${resumeScore}/100`}
          color="#2563eb"
        />

        <StatsCard
          title="🛠 Skills Found"
          value={skillsCount}
          color="#16a34a"
        />

        <StatsCard
          title="🎯 Career Goal"
          value={careerGoal}
          color="#9333ea"
        />

      </div>

      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        🤖 AI Career Tools
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "25px",
        }}
      >

        <FeatureCard
          title="📄 Resume Analyzer"
          text="Analyze your resume and improve ATS score."
          click={() => navigate("/resume")}
        />

        <FeatureCard
          title="🎯 Career Recommendation"
          text="Find the best career path."
          click={() => navigate("/career")}
        />

        <FeatureCard
          title="🧠 Skill Analysis"
          text="Identify missing skills."
          click={() => navigate("/skills")}
        />

        <FeatureCard
          title="💼 Job Recommendation"
          text="Get suitable job roles."
          click={() => navigate("/jobs")}
        />

        <FeatureCard
          title="🎤 AI Interview"
          text="Practice interview questions."
          click={() => navigate("/interview")}
        />

        <FeatureCard
          title="📝 Cover Letter"
          text="Generate professional cover letters."
          click={() => navigate("/cover-letter")}
        />

      </div>

    </div>

  );

}
function StatsCard({ title, value, color }) {

  return (

    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
        borderTop: `5px solid ${color}`,
        textAlign: "center",
      }}
    >

      <h3
        style={{
          marginBottom: "15px",
          color: "#555",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color: color,
          fontSize: "28px",
          margin: 0,
        }}
      >
        {value}
      </h2>

    </div>

  );

}

function FeatureCard({ title, text, click }) {

  return (

    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onClick={click}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 12px 25px rgba(37,99,235,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(0,0,0,0.08)";
      }}
    >

      <h3
        style={{
          color: "#2563eb",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#555",
          lineHeight: "24px",
        }}
      >
        {text}
      </p>

      <button
        onClick={click}
        style={buttonStyle}
      >
        Open
      </button>

    </div>

  );

}
const buttonStyle = {

  marginTop: "20px",

  padding: "12px 24px",

  background: "linear-gradient(90deg,#2563eb,#7c3aed)",

  color: "white",

  border: "none",

  borderRadius: "10px",

  cursor: "pointer",

  fontWeight: "bold",

  fontSize: "15px",

  width: "100%",

};

export default Dashboard;