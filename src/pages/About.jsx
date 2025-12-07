import Navbar from "../components/Navbar"
import photo1 from "../assets/TRL_About_Photo1.jpeg"
import photo2 from "../assets/TRL_About_Photo2.jpeg"
import "./About.css"

export default function About(){
    return(
        <>
            <Navbar />
            <div className="notebook-container">
                {/* Notebook background pattern */}
                <div className="notebook-lines"></div>
                
                {/* Main content section */}
                <section className="about-section">
                    {/* Title with pin - moved down */}
                    <div className="title-wrapper">
                        <div className="pin"></div>
                        <h1 className="notebook-title">About Terrapin Record Label</h1>
                    </div>

                    {/* First content block with image */}
                    <div className="content-block">
                        <div className="text-content">
                            <div className="post-it yellow">
                                <p className="notebook-text">
                                    Founded in 2017, Terrapin Record Label (TRL) is a student-run music collective at the University of Maryland dedicated to supporting, promoting, and celebrating music in all its forms.
                                </p>
                            </div>
                        </div>
                        <div className="image-content">
                            <div className="photo-frame frame-1">
                                <div className="pin pin-top-left"></div>
                                <div className="pin pin-top-right"></div>
                                <img src={photo1} alt="TRL Event" className="framed-photo" />
                            </div>
                        </div>
                    </div>

                    {/* Second content block */}
                    <div className="content-block reverse">
                        <div className="image-content">
                            <div className="photo-frame frame-2">
                                <div className="pin pin-top-left"></div>
                                <div className="pin pin-top-right"></div>
                                <img src={photo2} alt="TRL Community" className="framed-photo" />
                            </div>
                        </div>
                        <div className="text-content">
                            <div className="post-it pink">
                                <p className="notebook-text">
                                    TRL was created to centralize the campus music scene, providing a platform for production, promotion, and community connection. Since our founding, we have worked to give students and local artists opportunities to create, perform, and be heard.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third content block */}
                    <div className="content-block">
                        <div className="text-content">
                            <div className="post-it blue">
                                <p className="notebook-text">
                                    We have shown our presence at major campus and local events, including Next Now Festival, Maryland Day, Art Attack, and Lemon Zest, and we also host our own shows at local venues.
                                </p>
                            </div>
                        </div>
                        <div className="text-content">
                            <div className="post-it green">
                                <p className="notebook-text">
                                    As we continue to grow, TRL is expanding its reach, creating more opportunities for artists, and strengthening the music community both on and off campus.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fourth content block */}
                    <div className="content-block">
                        <div className="text-content full-width">
                            <div className="post-it yellow">
                                <p className="notebook-text">
                                    Over the years, TRL has evolved from a small student initiative into a thriving hub for creativity, collaboration, and musical exploration. Our legacy continues to grow, and we are committed to building something bigger, better, and louder—bringing music and community together every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo Gallery Section */}
                    <div className="gallery-section">
                        <div className="gallery-title">
                            <div className="pin"></div>
                            <h2>Our Moments</h2>
                        </div>
                        <div className="photo-gallery">
                            <div className="gallery-frame frame-3">
                                <div className="pin pin-top-left"></div>
                                <div className="pin pin-top-right"></div>
                                <img src={photo1} alt="Gallery 1" className="gallery-photo" />
                            </div>
                            <div className="gallery-frame frame-4">
                                <div className="pin pin-top-left"></div>
                                <div className="pin pin-top-right"></div>
                                <img src={photo2} alt="Gallery 2" className="gallery-photo" />
                            </div>
                            <div className="gallery-frame frame-5">
                                <div className="pin pin-top-left"></div>
                                <div className="pin pin-top-right"></div>
                                <img src={photo1} alt="Gallery 3" className="gallery-photo" />
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="social-section">
                        <div className="social-title">
                            <div className="pin"></div>
                            <h2>Connect With Us</h2>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/terrapinrecordlabel/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                            <a href="https://groupme.com" target="_blank" rel="noopener noreferrer" className="social-link groupme">
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                <span>GroupMe</span>
                            </a>
                            <a href="https://www.linkedin.com/company/terrapin-record-label" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://open.spotify.com/artist/terrapin-record-label" target="_blank" rel="noopener noreferrer" className="social-link spotify">
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                                </svg>
                                <span>Spotify</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
