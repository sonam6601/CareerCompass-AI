import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components2/Home.jsx";
import Dashboard from "./Dashboard.jsx";
import ResumeAnalyzer from "./ResumeAnalyzer.jsx";
import CareerRecommendation from "./CareerRecommendation.jsx";
import SkillAnalysis from "./SkillAnalysis.jsx";
import JobRecommendation from "./JobRecommendation.jsx";
import InterviewQuestions from "./InterviewQuestions.jsx";
import CoverLetter from "./CoverLetter.jsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/resume" element={<ResumeAnalyzer />} />

        <Route path="/career" element={<CareerRecommendation />} />

        <Route path="/skills" element={<SkillAnalysis />} />

        <Route path="/jobs" element={<JobRecommendation />} />

        <Route path="/interview" element={<InterviewQuestions />} />

        <Route path="/cover-letter" element={<CoverLetter />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;