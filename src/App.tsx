import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DataAnalysisCourse from "@/pages/DataAnalysisCourse";
import PythonCourse from "@/pages/PythonCourse";
import DataCollectionCourse from "@/pages/DataCollectionCourse";
import SupplyChainDataAnalysisCourse from "@/pages/SupplyChainDataAnalysisCourse";
import DatabasePrinciplesCourse from "@/pages/DatabasePrinciplesCourse";
import EnterpriseFinancialDataAnalysisCourse from "@/pages/EnterpriseFinancialDataAnalysisCourse";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<PythonCourse />} />
        <Route path="/data-analysis" element={<DataAnalysisCourse />} />
        <Route path="/data-collection" element={<DataCollectionCourse />} />
        <Route path="/supply-chain" element={<SupplyChainDataAnalysisCourse />} />
        <Route path="/database" element={<DatabasePrinciplesCourse />} />
        <Route path="/financial" element={<EnterpriseFinancialDataAnalysisCourse />} />
      </Routes>
    </Router>
  );
}
