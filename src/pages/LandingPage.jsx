import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import logo from "../assets/Terrapin_Record_Label.png";
import guitar from "../assets/hd-guitar-png-transparent-background-19.png";
import drums from "../assets/drum-kit-isolated-on-transparent-background-complete-modern-set-of-black-drums-drum-png.png";
import piano from "../assets/pngtree-digital-piano-keyboard-png-image_16338282.png";

export default function LandingPage() {
  const navigate = useNavigate()

  const handleActivate = (e) => {
    // allow keyboard and mouse activation
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      navigate('/about')
    }
  }

  return (
    <main
      onClick={handleActivate}
      onKeyDown={handleActivate}
      tabIndex={0}
      role="button"
      aria-label="Go to home"
      style={{ cursor: 'pointer' }}
    >
      <section className="landing">
        <img
          className="landing-image"
          src={logo}
          alt="TRL logo"
        />
        <img
          className="guitar-image"
          src={guitar}
          alt="Guitar"
        />
        <img
          className="drums-image"
          src={drums}
          alt="Drums"
        />
        <img
          className="piano-image"
          src={piano}
          alt="Piano"
        />
        <div className="landing-description">
          <h1>Terrapin Record Label</h1>
          <h2>
            Fostering a supportive community of student musicians on campus at the University of Maryland, est. 2017
          </h2>
        </div>
      </section>
    </main>
  )
}


