import { Routes, Route ,HashRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <HashRouter>
      <Route path="/MY-Portfolio/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </HashRouter>
  );
}

export default AppRoutes;
