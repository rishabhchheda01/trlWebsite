import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import logo from "../assets/Terrapin_Record_Label.png";

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
        <div className="landing-description">
          <h1>Terrapin Record Label</h1>
          <h2>
            Fostering a supportive community of student musicians on campus at UMD, est. 2017
          </h2>
        </div>
      </section>
    </main>
  )
}


