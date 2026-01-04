import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Experience from '../Pages/Experience';
import Education from '../Pages/Education';
import Honors from '../Pages/Honors';
import Contact from '../Pages/Contact';
import { createPageUrl } from '../utils';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />
          <Route path={createPageUrl('Home')} element={<Home />} />
          <Route path={createPageUrl('About')} element={<About />} />
          <Route path={createPageUrl('Skills')} element={<Skills />} />
          <Route path={createPageUrl('Projects')} element={<Projects />} />
          <Route path={createPageUrl('Experience')} element={<Experience />} />
          <Route path={createPageUrl('Education')} element={<Education />} />
          <Route path={createPageUrl('Honors')} element={<Honors />} />
          <Route path={createPageUrl('Contact')} element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
