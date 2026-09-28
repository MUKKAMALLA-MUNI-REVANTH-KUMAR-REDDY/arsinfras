import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-5K6C5XYC32";

// Fires a GA4 page_view on every route change
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        send_to: GA_MEASUREMENT_ID,
        page_path: location.pathname + location.search + location.hash,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/project/prestige-north-bangalore-phase-2"
            element={<Navigate to="/project/prestige-gardenia-estate" replace />}
          />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
