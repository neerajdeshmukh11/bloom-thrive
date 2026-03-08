import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import PatientLogin from "./pages/PatientLogin.jsx";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import Dashboard from "./pages/patient/Dashboard.jsx";
import HealthTimeline from "./pages/patient/HealthTimeline.jsx";
import ChildProfile from "./pages/patient/ChildProfile.jsx";
import Vaccinations from "./pages/patient/Vaccinations.jsx";
import Consultations from "./pages/patient/Consultations.jsx";
import DietPlans from "./pages/patient/DietPlans.jsx";
import YogaExercise from "./pages/patient/YogaExercise.jsx";
import MyProfile from "./pages/patient/MyProfile.jsx";
import DoctorDashboard from "./pages/doctor/DoctorDashboard.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/doctor/login" element={<DoctorLogin />} />
            <Route path="/patient/dashboard" element={<Dashboard />} />
            <Route path="/patient/health-timeline" element={<HealthTimeline />} />
            <Route path="/patient/child-profile" element={<ChildProfile />} />
            <Route path="/patient/vaccinations" element={<Vaccinations />} />
            <Route path="/patient/consultations" element={<Consultations />} />
            <Route path="/patient/diet-plans" element={<DietPlans />} />
            <Route path="/patient/yoga-exercise" element={<YogaExercise />} />
            <Route path="/patient/my-profile" element={<MyProfile />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
