import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

function App() {
  const location = useLocation();
  const DestinationPage = lazy(() => import('./pages/DestinationPage'));
  const HomePage = lazy(() => import('./pages/HomePage'));
  const CrewPage = lazy(() => import('./pages/CrewPage'));
  const TechPage = lazy(() => import('./pages/TechPage'));

  return (
    <AnimatePresence>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/destination"
            element={<Navigate to="/destination/Moon" />}
          />
          <Route path="/destination" element={<DestinationPage />}>
            <Route path=":planet" element={null} />
          </Route>
          <Route path="/crew" element={<Navigate to="/crew/DouglasHurley" />} />
          <Route path="/crew" element={<CrewPage />}>
            <Route path=":crew_people" element={null} />
          </Route>
          <Route
            path="/technology"
            element={<Navigate to="/technology/Launchvehicle" />}
          />
          <Route path="/technology" element={<TechPage />}>
            <Route path=":techInfo" element={null} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
