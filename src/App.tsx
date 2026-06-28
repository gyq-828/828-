import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import DataAnalysisCourse from "@/pages/DataAnalysisCourse";
import PythonCourse from "@/pages/PythonCourse";
import PythonTraining from "@/pages/PythonTraining";
import DataCollectionCourse from "@/pages/DataCollectionCourse";
import DataCollectionTraining from "@/pages/DataCollectionTraining";
import SupplyChainDataAnalysisCourse from "@/pages/SupplyChainDataAnalysisCourse";
import DatabasePrinciplesCourse from "@/pages/DatabasePrinciplesCourse";
import EnterpriseFinancialDataAnalysisCourse from "@/pages/EnterpriseFinancialDataAnalysisCourse";
import DataAnalysisDeepLearning from "@/pages/deep-learning/DataAnalysisDeepLearning";
import FinancialDataAnalysisDeepLearning from "@/pages/deep-learning/FinancialDataAnalysisDeepLearning";
import DataAnalysisTechSite from "@/pages/DataAnalysisTechSite";
import ClusterVisualizer from "@/components/ClusterVisualizer";
import PythonQuiz from "@/pages/PythonQuiz";
import DataAnalysisQuiz from "@/pages/DataAnalysisQuiz";
import DataCollectionQuiz from "@/pages/DataCollectionQuiz";
import DatabaseQuiz from "@/pages/DatabaseQuiz";
import FinancialQuiz from "@/pages/FinancialQuiz";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<PythonCourse />} />
        <Route path="/python-training" element={<PythonTraining />} />
        <Route path="/python-quiz" element={<PythonQuiz />} />
        <Route path="/data-analysis" element={<DataAnalysisCourse />} />
        <Route path="/data-analysis-quiz" element={<DataAnalysisQuiz />} />
        <Route path="/data-collection" element={<DataCollectionCourse />} />
        <Route path="/data-collection-training" element={<DataCollectionTraining />} />
        <Route path="/data-collection-quiz" element={<DataCollectionQuiz />} />
        <Route path="/supply-chain" element={<SupplyChainDataAnalysisCourse />} />
        <Route path="/database" element={<DatabasePrinciplesCourse />} />
        <Route path="/database-quiz" element={<DatabaseQuiz />} />
        <Route path="/financial" element={<EnterpriseFinancialDataAnalysisCourse />} />
        <Route path="/financial-quiz" element={<FinancialQuiz />} />
        <Route path="/deep-learning/data-analysis" element={<DataAnalysisDeepLearning />} />
        <Route path="/deep-learning/financial" element={<FinancialDataAnalysisDeepLearning />} />
        <Route path="/data-analysis-tech" element={<Navigate to="/data-analysis" replace />} />
        <Route path="/cluster-visualizer" element={<ClusterVisualizer />} />
      </Routes>
    </Router>
  );
}
