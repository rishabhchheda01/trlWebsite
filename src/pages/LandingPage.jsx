import React from 'react'
import './LandingPage.css'
import logo from "../assets/Terrapin_Record_Label.png";

export default function LandingPage() {
  return (
    <main>
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


