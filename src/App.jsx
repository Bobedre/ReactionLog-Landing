import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Credits from './pages/Credits';

function Layout({ children }) {
  return (
    <>
      {/* Navigation Header */}
      <nav style={{ 
        padding: '16px 0', 
        borderBottom: '1px solid var(--border-color)', 
        backgroundColor: 'var(--nav-bg)', 
        backdropFilter: 'blur(16px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        transition: 'background 0.3s ease, border-bottom 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="ReactionLog Logo" 
              style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '9px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }} 
            />
            <h2 style={{ color: 'var(--text-main)', margin: 0, fontSize: '1.4rem' }}>
              Reaction<span style={{ color: 'var(--primary)' }}>Log</span>
            </h2>
          </Link>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href={`${import.meta.env.BASE_URL}#features`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>Features</a>
            <a href={`${import.meta.env.BASE_URL}#analytics`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>Analytics</a>
            
            <a href={`${import.meta.env.BASE_URL}#download`} className="btn-primary" style={{ 
              textDecoration: 'none', 
              padding: '10px 18px', 
              borderRadius: '10px', 
              fontSize: '0.85rem' 
            }}>
              Get App
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '64px 0 32px 0', marginTop: '60px', backgroundColor: 'var(--panel-bg)', transition: 'background 0.3s ease, border-top 0.3s ease' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '32px', marginBottom: '48px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="ReactionLog Logo" 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }} 
                />
                <h3 style={{ color: 'var(--text-main)', margin: 0 }}>Reaction<span style={{ color: 'var(--primary)' }}>Log</span></h3>
              </div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '360px', fontSize: '0.95rem' }}>
                Connect what you eat with how you feel. A premium, privacy-first mobile tracker to identify food triggers using local database analytics.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '64px' }}>
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--text-main)', fontSize: '1.1rem' }}>App</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><a href={`${import.meta.env.BASE_URL}#features`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Features</a></li>
                  <li><a href={`${import.meta.env.BASE_URL}#analytics`} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Analytics</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '16px', color: 'var(--text-main)', fontSize: '1.1rem' }}>Legal & Info</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
                  <li><Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</Link></li>
                  <li><Link to="/credits" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Credits</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            color: 'var(--text-muted)', 
            fontSize: '0.85rem', 
            borderTop: '1px solid var(--border-color)', 
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              © {new Date().getFullYear()} ReactionLog. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Heart size={14} color="var(--danger)" />
              <span>Prioritizing your digestive health, offline and secure.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
