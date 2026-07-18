import React, { useState } from 'react';
import { 
  Activity, 
  Lock, 
  QrCode, 
  TrendingUp, 
  ShieldAlert, 
  ArrowRight,
  Check
} from 'lucide-react';

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <main>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '100px 24px 80px 24px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', zIndex: 10 }}>
          {/* Privacy Badge styled as App Tag */}
          <div className="app-tag floating" style={{ marginBottom: '24px' }}>
            <Lock size={14} />
            100% PRIVATE & OFFLINE
          </div>
          
          {/* Hero Slogan */}
          <h1 className="text-gradient" style={{ 
            fontSize: '4rem', 
            lineHeight: 1.15, 
            marginBottom: '24px',
            fontWeight: 800
          }}>
            Connect What You Eat With How You Feel
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            marginBottom: '40px', 
            maxWidth: '650px', 
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}>
            ReactionLog is a privacy-first mobile tracker designed to help you identify food intolerances. Discover your symptom triggers using a smart local correlation engine—no remote accounts required.
          </p>
          
          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://play.google.com/store/apps/details?id=com.bobedre.reactionlog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
            >
              Get on Google Play <ArrowRight size={16} />
            </a>
            <a href="#analytics" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Explore Analytics
            </a>
          </div>
          
          <p style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            * Available on Android. iOS support planned. Powered by Capacitor.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="app-tag" style={{ marginBottom: '12px' }}>
            Intuitive Features
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Take Control of Your Digestive Health</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Equipped with modern tools, ReactionLog simplifies the process of tracking meals and calculating intolerances.
          </p>
        </div>
        
        <div className="grid-features">
          {/* Feature 1 */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(13, 148, 136, 0.07)', 
              border: '1.5px solid var(--primary)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <QrCode size={26} color="var(--primary)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Barcode & Photo Scanning</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Log meals instantly by scanning product barcodes linked to Open Food Facts, or snap a photo of an ingredients list to parse text via on-device OCR.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(13, 148, 136, 0.07)', 
              border: '1.5px solid var(--primary)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Activity size={26} color="var(--primary)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Symptom Severity Logger</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Record symptoms like bloating, acid reflux, or headaches on a standard 1 to 10 scale. Log timestamps and custom notes to capture context.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(217, 119, 6, 0.07)', 
              border: '1.5px solid var(--secondary)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <TrendingUp size={26} color="var(--secondary)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Local Correlation Engine</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Cross-reference meals consumed within 24h, 48h, or 72h windows with logged symptoms. Identify which ingredients correlate most with your symptoms.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(13, 148, 136, 0.07)', 
              border: '1.5px solid var(--primary)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <ShieldAlert size={26} color="var(--primary)" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Trigger Alerts & Watchlist</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Flag known intolerances (e.g. gluten, lactose, garlic). The scanner automatically parses ingredients and alerts you if any watched items appear.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics & Media Showcase */}
      <section id="analytics" style={{ 
        padding: '100px 0', 
        position: 'relative', 
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'rgba(20, 184, 166, 0.03)',
        transition: 'background 0.3s ease, border 0.3s ease'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="app-tag" style={{ color: 'var(--secondary)', borderColor: 'rgba(217, 119, 6, 0.15)', background: 'rgba(217, 119, 6, 0.07)', marginBottom: '12px' }}>
              App Demo & Visuals
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>See ReactionLog in Action</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Explore how simple it is to track meals, record symptoms, and inspect local database trigger rankings.
            </p>
          </div>
          
          {/* Video Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '64px' }}>
            {/* Video Card 1 */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ 
                width: '100%', 
                background: '#faf7f2', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video 
                  src={`${import.meta.env.BASE_URL}logMealFlow.mp4`} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  controls
                  style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Meal Logging Flow</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Scan barcodes using Open Food Facts, use the camera to OCR-scan ingredient lists locally, and get instant watchlist alerts.
              </p>
            </div>

            {/* Video Card 2 */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ 
                width: '100%', 
                background: '#faf7f2', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video 
                  src={`${import.meta.env.BASE_URL}logSymptomFlow.mp4`} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  controls
                  style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Symptom Tracking Flow</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Log digestions, bloating, fatigue, or headaches on a 1-10 severity scale with custom notes and automatic logging timestamps.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>App Interface Gallery</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>A closer look at your localized health dashboards</p>
          </div>

          {/* Screenshot Interface Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {/* Screenshot 1 */}
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setActiveImage(`${import.meta.env.BASE_URL}logHistory.jpg`)}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={`${import.meta.env.BASE_URL}logHistory.jpg`} alt="Log History Screen" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Meal & Symptom History</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>Click to enlarge</span>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setActiveImage(`${import.meta.env.BASE_URL}logInsightMenu.jpg`)}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={`${import.meta.env.BASE_URL}logInsightMenu.jpg`} alt="Insights Screen" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Trigger Correlation Insights</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>Click to enlarge</span>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setActiveImage(`${import.meta.env.BASE_URL}logTrendMenu.jpg`)}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={`${import.meta.env.BASE_URL}logTrendMenu.jpg`} alt="Trends Screen" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Offline Regression Trends</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>Click to enlarge</span>
              </div>
            </div>

            {/* Screenshot 4 */}
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setActiveImage(`${import.meta.env.BASE_URL}logSettingsMenu.jpg`)}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img src={`${import.meta.env.BASE_URL}logSettingsMenu.jpg`} alt="Settings Screen" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Ingredient Watchlist & Config</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>Click to enlarge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Plan Section */}
      <section id="pricing" className="container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="app-tag" style={{ marginBottom: '12px' }}>
            Pricing Plans
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>ReactionLog Pro</h2>
          <p style={{ color: 'var(--text-muted)' }}>Unlock deep offline analysis and customization features.</p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '48px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '-35px', 
              background: 'linear-gradient(135deg, var(--secondary), #f59e0b)',
              color: '#ffffff',
              padding: '6px 40px',
              transform: 'rotate(45deg)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Popular
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--text-main)' }}>Pro Tier</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Deep analytical power for chronic intolerances.</p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>$14.99</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>/ year</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                Also available monthly for $2.99/mo
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', marginBottom: '32px' }} />

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.07)', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                  <Check size={16} color="var(--success)" />
                </div>
                <span>Unlimited historical data correlation analytics</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.07)', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                  <Check size={16} color="var(--success)" />
                </div>
                <span>Extended analysis windows (24h, 48h, & 72h)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.07)', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                  <Check size={16} color="var(--success)" />
                </div>
                <span>Unlimited custom watchlist ingredients</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.07)', padding: '4px', borderRadius: '50%', display: 'flex' }}>
                  <Check size={16} color="var(--success)" />
                </div>
                <span>Custom preset symptoms and severity scaling</span>
              </li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.bobedre.reactionlog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ textDecoration: 'none', display: 'block', width: '100%' }}
              >
                Upgrade in App
              </a>
              <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                * Core logging and basic analytics remain free forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download / Final CTA Section */}
      <section id="download" style={{ padding: '80px 24px', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>Start Connecting the Dots</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
            Download ReactionLog today to demystify your digestion, identify sensitivities, and build a body trigger map.
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.bobedre.reactionlog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
          >
            Download on Google Play
          </a>
        </div>
      </section>
      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(8, 12, 20, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <button 
            onClick={() => setActiveImage(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2.5rem',
              cursor: 'pointer',
              padding: '8px',
              lineHeight: 1
            }}
          >
            &times;
          </button>
          <img 
            src={activeImage} 
            alt="Enlarged app screenshot" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '85vh', 
              borderRadius: '20px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.08)',
              objectFit: 'contain',
              cursor: 'default'
            }} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </main>
  );
}
