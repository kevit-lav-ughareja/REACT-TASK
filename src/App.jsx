import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateFormPage from "./components/CandidateFormPage";
import CandidateFormPage2 from "./components/CandidateFormPage2";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CandidateFormPage2 />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
      {/*  <CandidateFormPage2 /> */}
    </>
  );
}

export default App;
