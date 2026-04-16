import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/about/VisionMission";
import Leadership from "./pages/about/Leadership";
import CorporateStructure from "./pages/about/CorporateStructure";
import Regions from "./pages/about/Regions";
import Compliance from "./pages/about/Compliance";
import Companies from "./pages/Companies";
import Motors from "./pages/companies/Motors";
import Security from "./pages/companies/Security";
import Trading from "./pages/companies/Trading";
import ImportCalculator from "./pages/companies/ImportCalculator";
import RiskAssessment from "./pages/companies/RiskAssessment";
import ExplorationMap from "./pages/companies/ExplorationMap";
import Excavators from "./pages/companies/motors/Excavators";
import Tractors from "./pages/companies/motors/Tractors";
import Engines from "./pages/companies/motors/Engines";
import ImportServices from "./pages/companies/motors/ImportServices";
import SpareParts from "./pages/companies/motors/SpareParts";
import MotorsFAQ from "./pages/companies/motors/MotorsFAQ";
import MotorsContact from "./pages/companies/motors/MotorsContact";
import { CorporateSecurity, IndustrialSecurity, MiningSecurity, VIPProtection, EventSecurity } from "./pages/companies/security/ServicePages";
import Surveillance from "./pages/companies/security/Surveillance";
import SecurityFAQ from "./pages/companies/security/SecurityFAQ";
import SecurityContact from "./pages/companies/security/SecurityContact";
import { GeologicalSurvey, MineralExploration, MiningOperations, MineralProcessing, LabTesting, MineralExport } from "./pages/companies/trading/ServicePages";
import TradingFAQ from "./pages/companies/trading/TradingFAQ";
import TradingContact from "./pages/companies/trading/TradingContact";
import TradingRegions from "./pages/companies/trading/TradingRegions";
import Projects from "./pages/Projects";
import Partnerships from "./pages/Partnerships";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/structure" element={<CorporateStructure />} />
            <Route path="/about/regions" element={<Regions />} />
            <Route path="/about/compliance" element={<Compliance />} />
            <Route path="/companies" element={<Companies />} />
            {/* Motors mini-site */}
            <Route path="/companies/motors" element={<Motors />} />
            <Route path="/companies/motors/excavators" element={<Excavators />} />
            <Route path="/companies/motors/tractors" element={<Tractors />} />
            <Route path="/companies/motors/engines" element={<Engines />} />
            <Route path="/companies/motors/import-services" element={<ImportServices />} />
            <Route path="/companies/motors/import-calculator" element={<ImportCalculator />} />
            <Route path="/companies/motors/spare-parts" element={<SpareParts />} />
            <Route path="/companies/motors/faq" element={<MotorsFAQ />} />
            <Route path="/companies/motors/contact" element={<MotorsContact />} />
            {/* Security mini-site */}
            <Route path="/companies/security" element={<Security />} />
            <Route path="/companies/security/corporate" element={<CorporateSecurity />} />
            <Route path="/companies/security/industrial" element={<IndustrialSecurity />} />
            <Route path="/companies/security/mining" element={<MiningSecurity />} />
            <Route path="/companies/security/vip" element={<VIPProtection />} />
            <Route path="/companies/security/event" element={<EventSecurity />} />
            <Route path="/companies/security/surveillance" element={<Surveillance />} />
            <Route path="/companies/security/risk-assessment" element={<RiskAssessment />} />
            <Route path="/companies/security/faq" element={<SecurityFAQ />} />
            <Route path="/companies/security/contact" element={<SecurityContact />} />
            {/* Trading mini-site */}
            <Route path="/companies/trading" element={<Trading />} />
            <Route path="/companies/trading/geological-survey" element={<GeologicalSurvey />} />
            <Route path="/companies/trading/exploration" element={<MineralExploration />} />
            <Route path="/companies/trading/mining-operations" element={<MiningOperations />} />
            <Route path="/companies/trading/processing" element={<MineralProcessing />} />
            <Route path="/companies/trading/lab-testing" element={<LabTesting />} />
            <Route path="/companies/trading/export" element={<MineralExport />} />
            <Route path="/companies/trading/regions" element={<TradingRegions />} />
            <Route path="/companies/trading/exploration-map" element={<ExplorationMap />} />
            <Route path="/companies/trading/faq" element={<TradingFAQ />} />
            <Route path="/companies/trading/contact" element={<TradingContact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
