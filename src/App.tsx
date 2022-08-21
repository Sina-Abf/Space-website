import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

function App() {
  const location = useLocation();
  const DestinationPage = lazy(() => import('./pages/DestinationPage'));
  const HomePage = lazy(() => import('./pages/HomePage'));
  const CrewPage = lazy(() => import('./pages/CrewPage'));

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
          <Route path="/crew" element={<CrewPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
