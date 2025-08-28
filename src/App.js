import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import BuildingScalableWebApplications from './pages/BuildingScalableWebApplications';
import MyJourneyFromUniversityToFullStack from './pages/MyJourneyFromUniversityToFullStack';
import OptimizingDatabasePerformance from './pages/OptimizingDatabasePerformance';
import TheFutureOfAI from './pages/TheFutureOfAI';
import ValueBeyondPrice from './pages/ValueBeyondPrice';
import EvertuneGEOStreamlinedSetup from './pages/EvertuneGEOStreamLinedSetup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/value-beyond-price" element={<ValueBeyondPrice />} />
            <Route path="/blog/building-scalable-web-applications" element={<BuildingScalableWebApplications />} />
            <Route path="/blog/my-journey-from-university-to-full-stack" element={<MyJourneyFromUniversityToFullStack />} />
            <Route path="/blog/optimizing-database-performance" element={<OptimizingDatabasePerformance />} />
            <Route path="/blog/the-future-of-ai" element={<TheFutureOfAI />} />
            <Route path="/blog/evertune-geo-streamlined-setup" element={<EvertuneGEOStreamlinedSetup />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
