import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, AlertCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="container" style={{ padding: '100px 24px', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'rgba(217, 119, 6, 0.1)',
            border: '1.5px solid var(--accent-amber)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Scale size={28} color="var(--accent-amber)" />
          </div>
          <div>
            <h1 className="text-gradient-amber" style={{ fontSize: '2.5rem', margin: 0 }}>Terms of Service</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: 'var(--text-main)', lineHeight: '1.8' }}>
          {/* Medical Disclaimer Banner */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            background: 'rgba(239, 68, 68, 0.05)', 
            border: '1px solid rgba(239, 68, 68, 0.15)', 
            borderRadius: '12px', 
            padding: '16px',
            alignItems: 'flex-start'
          }}>
            <AlertCircle size={20} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '4px' }} />
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
              <strong>CRITICAL MEDICAL DISCLAIMER:</strong> ReactionLog is a self-tracking utility application. It calculates basic statistical correlations between logged meals and symptoms. <strong>It does not provide medical advice, diagnosis, or treatment.</strong> Do not make major changes to your diet or ignore professional medical advice based on the correlations computed in this app without consulting a qualified medical doctor or registered dietitian.
            </div>
          </div>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-amber)' }}>1. Acceptance of Terms</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              By downloading, installing, or accessing ReactionLog, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not download or use the application.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-amber)' }}>2. License and Scope of Use</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to download and run the mobile application on your personal device for individual, non-commercial self-tracking purposes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-amber)' }}>3. Disclaimer of Warranties</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              The application and any calculated correlations are provided on an "as is" and "as available" basis without warranties of any kind. We make no representations that the app will accurately isolate every food intolerance or trigger symptom. Human digestion is complex and depends on many variables (stress, hydration, microbiome, medical conditions) that statistical correlation math cannot fully represent.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-amber)' }}>4. Limitation of Liability</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              To the maximum extent permitted by law, ReactionLog and its developers will not be liable for any damages, personal injuries, health complications, or financial losses resulting from your use of, or inability to use, the application.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--accent-amber)' }}>5. Contact</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              For legal inquiries or issues, please contact: <a href="mailto:reactionlogapp@gmail.com" style={{ color: 'var(--accent-amber)', textDecoration: 'none' }}>reactionlogapp@gmail.com</a>.
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
