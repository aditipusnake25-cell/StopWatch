import React from 'react'
import Stopwatch from "./Components/Stopwatch"
import './App.css'

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="SecondMark home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="17" r="10.5" />
          <path d="M16 11v6l4 2M12 3h8M16 3v3M24 7l2-2" />
        </svg>
      </span>
      <span>Second<span>Mark</span></span>
    </a>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#stopwatch">Stopwatch</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </nav>
          <a className="button button-small button-gradient header-cta" href="#stopwatch">
            Start timing <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-blue" aria-hidden="true" />
          <div className="hero-glow hero-glow-purple" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> A little more present</p>
              <h1 id="hero-title">Make every<br /><span>second count.</span></h1>
              <p className="hero-description">
                A smarter way to track time, stay productive, and make every moment meaningful.
              </p>
              <div className="hero-actions">
                <a className="button button-gradient" href="#stopwatch">
                  Start stopwatch <span aria-hidden="true">→</span>
                </a>
                <a className="button button-outline" href="#features">
                  Explore features <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <span className="proof-icon" aria-hidden="true">✦</span>
                <span>Simple by design. Ready when you are.</span>
              </div>
            </div>

            <div className="hero-art" aria-label="A visual illustration of a stopwatch">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-glow" />
              <div className="watch-face">
                <span className="watch-crown" />
                <span className="watch-tick tick-top" />
                <span className="watch-tick tick-right" />
                <span className="watch-tick tick-bottom" />
                <span className="watch-tick tick-left" />
                <span className="watch-hand" />
                <span className="watch-hub" />
                <span className="watch-center-label">MAKE IT<br />MATTER</span>
              </div>
              <div className="art-note art-note-top"><span /> TIME IS YOURS</div>
              <div className="art-note art-note-bottom">01 — STAY IN THE MOMENT</div>
            </div>
          </div>
          <a className="scroll-cue" href="#stopwatch">
            <span className="scroll-cue-line" /> Scroll to begin
          </a>
        </section>

        <section className="stopwatch-section" id="stopwatch" aria-labelledby="stopwatch-title">
          <div className="container">
            <div className="section-heading timer-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> Your time, in focus</p>
                <h2 id="stopwatch-title">Start where you are.</h2>
              </div>
              <p className="section-description">
                No pressure, no clutter. Just a little space to focus on what matters now.
              </p>
            </div>

            <div className="stopwatch-card">
              <div className="stopwatch-card-top">
                <span className="timer-status"><span /> PRECISION TIMER</span>
                <span className="timer-session">SESSION <strong>01</strong></span>
              </div>
              <div className="stopwatch-display">
                <Stopwatch />
              </div>
              <div className="stopwatch-card-bottom">
                <span><span className="bottom-spark">✦</span> Take it one moment at a time</span>
                <span>HH : MM : SS <i>·</i> MS</span>
              </div>
            </div>
            <p className="timer-caption">A clear, precise timer to help you stay present.</p>
          </div>
        </section>

        <section className="features-section section-pad" id="features" aria-labelledby="features-title">
          <div className="container">
            <div className="section-heading features-heading">
              <div>
                <p className="eyebrow">Made for your momentum</p>
                <h2 id="features-title">Time well spent<br /><span>starts right here.</span></h2>
              </div>
              <p className="section-description">
                Thoughtful essentials that make it easier to focus on the next thing in front of you.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <span className="feature-number">01</span>
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2M12 2v2M22 12h-2" /></svg>
                </span>
                <h3>Precision timing</h3>
                <p>Every moment is counted with a clear, detailed timer that keeps you in the flow.</p>
                <span className="feature-link">ACCURACY, MADE SIMPLE <span>↗</span></span>
              </article>
              <article className="feature-card">
                <span className="feature-number">02</span>
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 19V5m0 14h16M8 15l3-4 3 2 5-7" /><circle cx="19" cy="6" r="1.5" /></svg>
                </span>
                <h3>Lap tracking</h3>
                <p>Lap recording isn’t part of this version yet. For now, keep one focused session in view.</p>
                <span className="feature-link">ONE SESSION AT A TIME <span>↗</span></span>
              </article>
              <article className="feature-card">
                <span className="feature-number">03</span>
                <span className="feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="8.5" /></svg>
                </span>
                <h3>Simple controls</h3>
                <p>Start, pause, or reset without breaking your concentration. Nothing more to learn.</p>
                <span className="feature-link">FOCUS WITHOUT FRICTION <span>↗</span></span>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="container about-inner">
            <div className="about-copy">
              <p className="eyebrow">A better relationship with time</p>
              <h2 id="about-title">A moment of focus<br />can change <span>everything.</span></h2>
              <p className="about-description">
                SecondMark is built around a simple idea: when you can give your attention to one thing,
                the minutes feel a little more meaningful. No accounts, no distractions—just a calm,
                reliable place to begin.
              </p>
              <a className="text-link" href="#stopwatch">Find your focus <span aria-hidden="true">→</span></a>
            </div>
            <div className="about-visual">
              <div className="about-visual-glow" />
              <div className="focus-card">
                <div className="focus-card-top"><span>THE FOCUS RITUAL</span><span>01 / 03</span></div>
                <div className="focus-symbol" aria-hidden="true">
                  <span className="focus-ring ring-a" />
                  <span className="focus-ring ring-b" />
                  <span className="focus-ring ring-c" />
                  <span className="focus-star">✦</span>
                </div>
                <p className="focus-quote">“Small moments<br />make a meaningful day.”</p>
                <div className="focus-card-bottom"><span>PAUSE</span><span>CHOOSE</span><span>BEGIN</span></div>
              </div>
              <span className="visual-orbit-label">PRESENT, BY DESIGN</span>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-decoration cta-decoration-one" aria-hidden="true" />
              <div className="cta-decoration cta-decoration-two" aria-hidden="true" />
              <div className="cta-content">
                <p className="eyebrow">Your next moment starts now</p>
                <h2 id="cta-title">Ready to make every<br />second count?</h2>
                <a className="button button-light" href="#stopwatch">
                  Start timing <span aria-hidden="true">→</span>
                </a>
              </div>
              <span className="cta-spark" aria-hidden="true">✦</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-about">
            <Logo />
            <p>A little more focus.<br />A lot more meaning in every moment.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">EXPLORE</span>
            <a href="#home">Home</a>
            <a href="#stopwatch">Stopwatch</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-note">
            <span className="footer-label">A MOMENT FOR YOU</span>
            <p>Make room for<br /><span>what matters.</span></p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SecondMark. All moments matter.</span>
          <span>Built with React <i>·</i> Made for the present</span>
        </div>
      </footer>
    </>
  )
}

export default App
