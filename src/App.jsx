import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
