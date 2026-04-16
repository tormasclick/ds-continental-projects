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
            <Route path="/companies/motors" element={<Motors />} />
            <Route path="/companies/security" element={<Security />} />
            <Route path="/companies/trading" element={<Trading />} />
            <Route path="/companies/motors/import-calculator" element={<ImportCalculator />} />
            <Route path="/companies/security/risk-assessment" element={<RiskAssessment />} />
            <Route path="/companies/trading/exploration-map" element={<ExplorationMap />} />
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
