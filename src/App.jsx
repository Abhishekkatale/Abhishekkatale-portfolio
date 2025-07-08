import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
