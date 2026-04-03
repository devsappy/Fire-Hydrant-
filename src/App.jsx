import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectOverview = lazy(() => import('./pages/ProjectOverview'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogEssentialExtinguishers = lazy(() => import('./pages/BlogEssentialExtinguishers'));
const BlogSafetyRegs2026 = lazy(() => import('./pages/BlogSafetyRegs2026'));
const BlogSprinklerUpgrade = lazy(() => import('./pages/BlogSprinklerUpgrade'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
        <Header />
        <main className="main-content-area">
          <Suspense fallback={<div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Catalog />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectOverview />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/essential-fire-extinguisher-types" element={<BlogEssentialExtinguishers />} />
              <Route path="/blog/new-safety-regulations-2026" element={<BlogSafetyRegs2026 />} />
              <Route path="/blog/warehouse-sprinkler-system-upgrade" element={<BlogSprinklerUpgrade />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
