import { useState } from "react";

function Resume() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/upload-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResult(data);

      localStorage.setItem(
        "resumeScore",
        data.score
      );

      localStorage.setItem(
        "skillsCount",
        data.skills.length
      );

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#eef4ff",
        minHeight: "100vh",
      }}
    >

      <h1>📄 Resume Analyzer</h1>

      <p>
        Upload your resume and get AI analysis.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <br /><br />

      <button
        onClick={uploadResume}
        style={{
          padding: "12px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Analyze Resume
      </button>


      {result && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "25px",
            borderRadius: "20px",
          }}
        >

          <h2>
            ✅ Score: {result.score}/100
          </h2>

          <h3>
            🛠 Skills Found:
          </h3>

          <p>
            {result.skills.join(", ")}
          </p>


          <h3>
            💡 Suggestions:
          </h3>

          {result.suggestions.map(
            (item, index) => (
              <p key={index}>
                • {item}
              </p>
            )
          )}

        </div>
      )}

    </div>
  );
}

export default Resume;