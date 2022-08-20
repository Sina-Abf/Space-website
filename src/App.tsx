import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import DestinationPage from './pages/DestinationPage';

function App() {
  return (
    <main className="min-h-screen bg-main-mobile bg-cover bg-center md:bg-main-tablet lg:bg-main-desktop">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
      </Routes>
    </main>
  );
}

export default App;
