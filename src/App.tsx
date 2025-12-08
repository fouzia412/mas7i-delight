import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import RecruitmentPage from "./pages/services/RecruitmentPage";
import TravelPage from "./pages/services/TravelPage";
import MarketingPage from "./pages/services/MarketingPage";
import BrandingPage from "./pages/services/BrandingPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import HomeLoansPage from "./pages/services/HomeLoansPage";
import BlogsPage from "./pages/BlogsPage";
import ProcessPage from "./pages/ProcessPage";
import WhyUsPage from "./pages/WhyUsPage";
import FAQsPage from "./pages/FAQsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/recruitment" element={<RecruitmentPage />} />
          <Route path="/services/travel" element={<TravelPage />} />
          <Route path="/services/marketing" element={<MarketingPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/home-loans" element={<HomeLoansPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
