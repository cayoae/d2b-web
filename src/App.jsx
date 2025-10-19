import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import WebAppsSites from './pages/WebAppsSites';
import AutomationAI from './pages/AutomationAI';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services/web-apps-sites" element={<WebAppsSites />} />
          <Route path="services/automation-ai" element={<AutomationAI />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:id" element={<WorkDetail />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
