import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// Layout
import Navbar from './components/navbar';
import Footer from './components/footer';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/services';
import ServiceDetail from './pages/serviceDetail';
import TemplatesPage from './pages/templates';
import ContactPage from './pages/Bookcall';
import BookCallPage from './components/bookcall';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-call" element={<BookCallPage />} />
      </Routes>

      {/* Hide Footer on Book Call */}
      <Routes>
        <Route path="/*" element={<Footer />} />
        <Route path="/book-call" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </div>
  );
}
