import React from 'react'
import './LandingPage.css'
import logo from "../assets/logo.png";

export default function LandingPage() {
  return (
    <main>
      <section className="landing">
        <img
          className="landing-image"
          src={logo}
          alt="TRL logo"
        />
        <>
        <h1>Terrapin Record Label</h1>
        <h2 className="landing-description">
          Fostering a supportive community of student musicians on campus at UMD, est. 2017
        </h2>
        </>
      </section>
    </main>
  )
}


