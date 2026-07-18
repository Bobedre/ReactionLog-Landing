import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <ShieldCheck size={28} color="var(--accent-teal)" />
          </div>
          <div>
            <h1 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--text-main)', lineHeight: '1.8' }}>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            background: 'rgba(13, 148, 136, 0.05)', 
            border: '1px solid rgba(13, 148, 136, 0.15)', 
            borderRadius: '12px', 
            padding: '16px',
            alignItems: 'flex-start'
          }}>
            <Lock size={20} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: '4px' }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
              <strong>Our Privacy Commitment:</strong> ReactionLog is designed as a fully offline-ready mobile application. Your health, symptoms, diet, and logs are highly personal. We do not collect, view, or store your data on external servers. Everything stays on your device.
            </p>
          </div>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-teal)' }}>1. What Data is Stored and Processed</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              ReactionLog records and stores user logs locally on the device (using Dexie.js and IndexedDB storage). This includes:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '8px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Meals:</strong> Ingredients list, product names, food barcode identifiers, and scanned labels.</li>
              <li><strong>Symptoms:</strong> Symptom categories (e.g. Bloating, Headache), custom notes, and severity ratings scaled from 1 to 10.</li>
              <li><strong>Timestamps:</strong> Exact times when meals and symptoms are logged, which are required for correlation analytics.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-teal)' }}>2. How Your Data is Used</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              All mathematical and correlation analysis is computed directly on your device. We do not upload your logs to analyze triggers. The local correlation coefficients, trend charts, and watchlists are exclusively generated on your local phone processor.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-teal)' }}>3. External Third-Party API Queries</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              When you use the barcode scanner, ReactionLog queries the open-source database <strong>Open Food Facts</strong> to fetch product ingredient listings.
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '8px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Only the barcode numeric sequence is sent to Open Food Facts.</li>
              <li>No personal information, device ID, or user profiles are sent with this query.</li>
              <li>OCR text recognition of food packaging photo lists is run locally using ML Kit models directly on your hardware; your camera photos are never sent to the cloud.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-teal)' }}>4. Backups and Deletion</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Because your data is offline and stored in your browser or Capacitor web view IndexedDB state:
            </p>
            <ul style={{ paddingLeft: '24px', marginTop: '8px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Uninstalling the mobile application or clearing app storage will delete all logged data permanently.</li>
              <li>You can manually export/import JSON database backups in the Settings tab to safeguard your logs.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-teal)' }}>5. Contact Information</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              If you have questions regarding the application, or to report issues, contact us at: <a href="mailto:reactionlogapp@gmail.com" style={{ color: 'var(--accent-amber)', textDecoration: 'none' }}>reactionlogapp@gmail.com</a>.
            </p>
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
