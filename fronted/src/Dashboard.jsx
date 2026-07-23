import ThemeToggle from "./ThemeToggle.jsx";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const resumeScore =
    localStorage.getItem("resumeScore") || "100";

  const skillsCount =
    localStorage.getItem("skillsCount") || "8";

  const careerGoal =
    localStorage.getItem("careerGoal") || "Data Analyst";


  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    navigate("/");

  };


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#eef4ff,#dbeafe)",
        padding:"35px",
        fontFamily:"Arial, sans-serif"
      }}
    >


      {/* Header */}

      <div
        style={{
          background:"linear-gradient(135deg,#2563eb,#7c3aed)",
          borderRadius:"22px",
          color:"white",
          padding:"35px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          boxShadow:"0 10px 25px rgba(0,0,0,0.15)"
        }}
      >

        <div>

          <h1>
            🚀 CareerCompass AI
          </h1>


          <p>
            Welcome back,
            <b> {email}</b>
          </p>


        </div>


       <div
  style={{
    display:"flex",
    gap:"15px",
    alignItems:"center"
  }}
>
  <ThemeToggle />

  <button
    onClick={handleLogout}
    style={{
      padding:"12px 22px",
      border:"none",
      borderRadius:"10px",
      cursor:"pointer",
      background:"white",
      color:"#2563eb",
      fontWeight:"bold"
    }}
  >
    Logout
  </button>

</div>


      </div>




      {/* Career Progress */}


      <div
        style={{
          marginTop:"30px",
          background:"white",
          padding:"25px",
          borderRadius:"20px",
          boxShadow:"0 5px 18px rgba(0,0,0,0.08)"
        }}
      >

        <h2>
          📈 Career Progress
        </h2>


        <div
          style={{
            width:"100%",
            height:"18px",
            background:"#e5e7eb",
            borderRadius:"20px",
            overflow:"hidden"
          }}
        >

          <div
            style={{
              width:`${resumeScore}%`,
              height:"100%",
              background:"linear-gradient(90deg,#22c55e,#2563eb)"
            }}
          />

        </div>


        <h3
          style={{
            color:"#2563eb"
          }}
        >
          {resumeScore}% Completed
        </h3>


      </div>




      {/* Stats Cards */}


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          marginTop:"30px"
        }}
      >


        <StatsCard
          title="📊 Resume Score"
          value={`${resumeScore}/100`}
        />


        <StatsCard
          title="🛠 Skills Found"
          value={skillsCount}
        />


        <StatsCard
          title="🎯 Career Goal"
          value={careerGoal}
        />


      </div>
            {/* Today's Progress */}

      <div
        style={{
          marginTop:"30px",
          background:"white",
          padding:"25px",
          borderRadius:"20px",
          boxShadow:"0 5px 18px rgba(0,0,0,0.08)"
        }}
      >

        <h2>📅 Today's Progress</h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(4,1fr)",
            gap:"15px"
          }}
        >

          <ProgressCard
            title="📚 Courses"
            value="3"
          />

          <ProgressCard
            title="📝 Resume"
            value="Done"
          />

          <ProgressCard
            title="🎤 Interview"
            value="1"
          />

          <ProgressCard
            title="💼 Jobs"
            value="12"
          />

        </div>

      </div>





      {/* Quick Actions */}

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <h2>⚡ Quick Actions</h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            gap:"20px"
          }}
        >

          <FeatureCard
            title="📄 Upload Resume"
            text="Upload your latest resume for AI analysis."
            click={() => navigate("/resume")}
          />


          <FeatureCard
            title="🎤 Mock Interview"
            text="Practice AI interview questions."
            click={() => navigate("/interview")}
          />


          <FeatureCard
            title="💼 Find Jobs"
            text="Discover jobs matching your profile."
            click={() => navigate("/jobs")}
          />

        </div>

      </div>





      {/* AI Career Tools */}

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <h2>🤖 AI Career Tools</h2>


        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            gap:"20px"
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
          <FeatureCard
  title="🗺️ AI Career Roadmap"
  text="Get a step-by-step roadmap to achieve your career goal."
  click={() => navigate("/roadmap")}
/>



          <FeatureCard
            title="📚 AI Course Recommendation"
            text="Get recommended courses based on your career goal."
            click={() => navigate("/courses")}
          />


          <FeatureCard
            title="🤖 AI Resume Improvement"
            text="Get resume score and improvement suggestions."
            click={() => navigate("/resume-improvement")}
          />
          <FeatureCard
  title="🤖 AI Career Chat"
  text="Ask career-related questions and get instant AI guidance."
  click={() => navigate("/chat")}
/>
<FeatureCard
  title="📝 AI Career Quiz"
  text="Take a career quiz and discover the best career path."
  click={() => navigate("/career-quiz")}
/>
<FeatureCard
  title="📋 Job Application Tracker"
  text="Track your job applications and interview progress."
  click={() => navigate("/job-tracker")}
/>

        </div>


      </div>
          </div>

  );

}




// Stats Card

function StatsCard({ title, value }) {

  return (

    <div
      style={{
        background:"white",
        padding:"25px",
        borderRadius:"20px",
        boxShadow:"0 5px 18px rgba(0,0,0,0.08)"
      }}
    >

      <h3>{title}</h3>

      <h2
        style={{
          color:"#2563eb"
        }}
      >
        {value}
      </h2>

    </div>

  );

}






// Progress Card

function ProgressCard({ title, value }) {

  return (

    <div
      style={{
        background:"#eff6ff",
        padding:"20px",
        borderRadius:"15px",
        textAlign:"center"
      }}
    >

      <h3>{title}</h3>


      <h2
        style={{
          color:"#2563eb"
        }}
      >
        {value}
      </h2>


    </div>

  );

}






// Feature Card

function FeatureCard({ title, text, click }) {

  return (

    <div
      style={{
        background:"white",
        padding:"25px",
        borderRadius:"20px",
        boxShadow:"0 5px 18px rgba(0,0,0,0.08)"
      }}
    >

      <h3>{title}</h3>


      <p>
        {text}
      </p>



      <button
        onClick={click}
        style={{
          marginTop:"15px",
          padding:"10px 20px",
          border:"none",
          borderRadius:"10px",
          background:"#2563eb",
          color:"white",
          cursor:"pointer",
          fontWeight:"bold"
        }}
      >
        Open
      </button>


    </div>

  );

}



export default Dashboard;