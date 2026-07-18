import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Code, Database } from 'lucide-react';

export default function Credits() {
  return (
    <main className="container" style={{ padding: '100px 24px', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(13, 148, 136, 0.1)',
            border: '1.5px solid var(--accent-teal)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Award size={28} color="var(--accent-teal)" />
          </div>
          <div>
            <h1 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>Credits</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Open-source technologies powering ReactionLog</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-main)', lineHeight: '1.8' }}>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            ReactionLog is built on top of high-quality open-source software, free public databases, and web frameworks. We would like to express our gratitude to the maintainers of the following projects:
          </p>

          {/* Database Credits */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Database size={20} color="var(--accent-teal)" />
              <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>Data & OCR Services</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ borderLeft: '3px solid var(--accent-teal)', paddingLeft: '16px' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Open Food Facts API</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0 8px 0' }}>
                  Used to fetch ingredient lists and packaging details associated with product barcodes.
                </p>
                <a 
                  href="https://world.openfoodfacts.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-amber)', textDecoration: 'none', fontSize: '0.85rem' }}
                >
                  Visit Open Food Facts →
                </a>
              </li>
              <li style={{ borderLeft: '3px solid var(--accent-teal)', paddingLeft: '16px' }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Capacitor ML Kit Barcode Scanner</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>
                  Enables lightning-fast local camera barcode scanning functionality.
                </p>
              </li>
            </ul>
          </section>

          {/* Code Libraries Credits */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Code size={20} color="var(--accent-teal)" />
              <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>Core Libraries & Frameworks</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ borderLeft: '3px solid var(--border-glass)', paddingLeft: '16px' }}>
                <strong style={{ color: 'var(--text-main)' }}>Dexie.js & dexie-react-hooks</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '2px 0 0 0' }}>
                  Provides the local database abstraction layer for client-side IndexedDB logs storage.
                </p>
              </li>
              <li style={{ borderLeft: '3px solid var(--border-glass)', paddingLeft: '16px' }}>
                <strong style={{ color: 'var(--text-main)' }}>Capacitor & Capacitor Camera</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '2px 0 0 0' }}>
                  Enables packaging of the React web UI into premium Android and iOS applications with camera access.
                </p>
              </li>
              <li style={{ borderLeft: '3px solid var(--border-glass)', paddingLeft: '16px' }}>
                <strong style={{ color: 'var(--text-main)' }}>Lucide React Icons</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '2px 0 0 0' }}>
                  Provides clean, consistent vector icons for features, settings, activity tracking, and dashboard navigation.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link to="/" className="btn-secondary" style={{ textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
