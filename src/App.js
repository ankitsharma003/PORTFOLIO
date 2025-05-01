import "./App.css";
import Sidenavbar from "./components/SideNavbar/Sidenavbar";
import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FloatingActionButton from "./components/FloatingActionButton/FloatingActionButton";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader"></div>
  </div>
);

// ScrollToTop component that automatically scrolls to top when navigating
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function AppContent() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Sidenavbar />
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Floating Action Button for quick navigation */}
      <FloatingActionButton />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}

function App() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 100,
      disable: window.innerWidth < 768 ? true : false, // Disable animations on mobile for better performance
    });

    // Clean up AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App">
      <div className="background-pattern"></div>

      {/* Preloader */}
      <Preloader />

      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
