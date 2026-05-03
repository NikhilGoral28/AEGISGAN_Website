import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Core Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Expectations from "./components/Expectations";
import Services from "./components/Services";
import Awards from "./components/Awards";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Lazy Loaded Utility/Marketing Pages
const Industries = lazy(() => import("./pages/Industries"));
const Insights = lazy(() => import("./pages/Insights"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ModelOverview = lazy(() => import("./pages/ModelOverview"));
const Documentation = lazy(() => import("./pages/Documentation"));

// Context & Security
import ErrorBoundary from "./components/ErrorBoundary";

// Loading Fallback
const LoadingScreen = () => (
  <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center">
    <div className="w-1 w-48 bg-white/5 rounded-full overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full bg-cyan-500 animate-[loading_1.5s_ease-in-out_infinite]"></div>
    </div>
    <p className="mt-4 text-cyan-500/50 font-mono text-[10px] tracking-widest uppercase animate-pulse">
      Retrieving Platform Data...
    </p>
    <style>{`
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />

      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                  <Expectations />
                  <Services />
                  <Awards />
                  <FAQ />
                  <Footer />
                </>
              }
            />

            {/* Public Info Routes (Lazy) */}
            <Route path="/model-overview" element={<ModelOverview />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

