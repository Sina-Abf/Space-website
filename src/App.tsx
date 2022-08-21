import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/destination"
          element={<Navigate to="/destination/Moon" />}
        />
        <Route path="/destination" element={<DestinationPage />}>
          <Route path=":planet" />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
