import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import KMeansVisualizer from "@/components/KMeansVisualizer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<PythonCourse />} />
        <Route path="/python-training" element={<PythonTraining />} />
        <Route path="/data-analysis" element={<DataAnalysisCourse />} />
        <Route path="/data-collection" element={<DataCollectionCourse />} />
        <Route path="/data-collection-training" element={<DataCollectionTraining />} />
        <Route path="/supply-chain" element={<SupplyChainDataAnalysisCourse />} />
        <Route path="/database" element={<DatabasePrinciplesCourse />} />
        <Route path="/financial" element={<EnterpriseFinancialDataAnalysisCourse />} />
        <Route path="/deep-learning/data-analysis" element={<DataAnalysisDeepLearning />} />
        <Route path="/deep-learning/financial" element={<FinancialDataAnalysisDeepLearning />} />
        <Route path="/data-analysis-tech" element={<DataAnalysisTechSite />} />
        <Route path="/kmeans-visualizer" element={<KMeansVisualizer />} />
      </Routes>
    </Router>
  );
}
