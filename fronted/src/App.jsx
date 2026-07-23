import JobTracker from "./JobTracker.jsx";
import CareerQuiz from "./CareerQuiz.jsx";
import ChatAssistant from "./ChatAssistant.jsx";
import Roadmap from "./Roadmap.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components2/Home.jsx";
import Dashboard from "./Dashboard.jsx";
import ResumeAnalyzer from "./ResumeAnalyzer.jsx";
import CareerRecommendation from "./CareerRecommendation.jsx";
import SkillAnalysis from "./SkillAnalysis.jsx";
import JobRecommendation from "./JobRecommendation.jsx";
import InterviewQuestions from "./InterviewQuestions.jsx";
import CoverLetter from "./CoverLetter.jsx";
import RoadmapGenerator from "./RoadmapGenerator.jsx";
import CourseRecommendation from "./CourseRecommendation.jsx";
import ResumeImprovement from "./ResumeImprovement.jsx";
import Profile from "./Profile.jsx";
import Analytics from "./Analytics.jsx";

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

        <Route path="/roadmap" element={<RoadmapGenerator />} />

        <Route path="/courses" element={<CourseRecommendation />} />

        <Route
          path="/resume-improvement"
          element={<ResumeImprovement />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
  path="/chat"
  element={<ChatAssistant />}
/>
<Route
  path="/career-quiz"
  element={<CareerQuiz />}
/>
<Route
  path="/job-tracker"
  element={<JobTracker />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;