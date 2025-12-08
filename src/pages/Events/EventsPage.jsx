import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./EventsPage.css";

export default function EventsPage() {
  const [expandedId, setExpandedId] = useState(null);
  const [animatingClose, setAnimatingClose] = useState(false);
  const expandedRef = useRef(null);

  const events = [
    {
      id: 1,
      image: "https://placehold.co/800x400/cccccc/000000?text=Event+1",
      date: "Nov 10, 2025",
      description: "Vinyl Listening Party — exclusive LP releases & artist Q&A.",
      details:
        "Join us for a deep-cut vinyl listening session featuring unreleased LP tracks, Q&A with producers, and a curated sound experience.",
    },
    {
      id: 2,
      image: "https://placehold.co/800x400/cccccc/000000?text=Event+2",
      date: "Dec 3, 2025",
      description: "Live showcase featuring local Terrapin artists.",
      details:
        "A special night highlighting emerging Terrapin musicians, with behind-the-scenes stories and live showcases.",
    },
    {
      id: 3,
      image: "https://placehold.co/800x400/cccccc/000000?text=Event+3",
      date: "Jan 15, 2026",
      description: "Studio open house — behind the scenes of album production.",
      details:
        "Tour the recording studio, watch mixing demos, try equipment, and talk with producers.",
    },
  ];

  const pastEvents = [
    {
      id: "p1",
      image: "https://placehold.co/800x400/999999/000000?text=Past+Event+1",
      date: "Aug 4, 2025",
      description: "Summer mixtape premiere & artist meet-and-greet.",
      details:
        "A celebration of summer releases from local artists with curated listening booths and live commentary.",
    },
    {
      id: "p2",
      image: "https://placehold.co/800x400/999999/000000?text=Past+Event+2",
      date: "July 19, 2025",
      description: "Producer spotlight night.",
      details:
        "Behind-the-scenes look at mixing, mastering, and production showcases from student producers.",
    },
  ];


  const openCard = (id) => {
    setAnimatingClose(false);
    setExpandedId(id);
  };

  const closeCard = () => {
    setAnimatingClose(true);
    setTimeout(() => {
      setExpandedId(null);
      setAnimatingClose(false);
    }, 250); // match CSS animation
  };

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e) {
      if (expandedRef.current && !expandedRef.current.contains(e.target)) {
        closeCard();
      }
    }
    if (expandedId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expandedId]);

  return (
    <>
      <Navbar />
      <main className="events-page">
        <h2 className="events-heading">Upcoming Events</h2>

        <div className={`events-grid ${expandedId ? "expanded-mode" : ""}`}>
          {events.map((event) => {
            const isOpen = expandedId === event.id;

            return (
              <div
                key={event.id}
                className={`event-card 
                            ${isOpen ? "expanded" : ""} 
                            ${isOpen && animatingClose ? "fade-out" : ""}`}
                onClick={() => !isOpen && openCard(event.id)}
                ref={isOpen ? expandedRef : null}
              >

                {/* Close button */}
                {isOpen && (
                  <button className="close-btn" onClick={closeCard}>
                    ✕
                  </button>
                )}

                {/* One image only */}
                <img src={event.image} alt={event.description} />

                <div className="event-content">
                  <p className="event-date">{event.date}</p>
                  <p className="event-desc">{event.description}</p>
                </div>

                {isOpen && (
                  <div className="event-expanded">
                    <h3 className="event-subheading">About This Event</h3>
                    <p className="event-details">{event.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
                {/* ---------------- PAST EVENTS ---------------- */}
        <h2 className="events-heading past-heading">Past Events</h2>

        <div className={`events-grid ${expandedId ? "expanded-mode" : ""}`}>
          {pastEvents.map((event) => {
            const isOpen = expandedId === event.id;

            return (
              <div
                key={event.id}
                className={`event-card past-event-card
                            ${isOpen ? "expanded" : ""} 
                            ${isOpen && animatingClose ? "fade-out" : ""}`}
                onClick={() => !isOpen && openCard(event.id)}
                ref={isOpen ? expandedRef : null}
              >
                {isOpen && (
                  <button className="close-btn" onClick={closeCard}>
                    ✕
                  </button>
                )}

                <img src={event.image} alt={event.description} />

                <div className="event-content">
                  <p className="event-date">{event.date}</p>
                  <p className="event-desc">{event.description}</p>
                </div>

                {isOpen && (
                  <div className="event-expanded">
                    <h3 className="event-subheading">About This Event</h3>
                    <p className="event-details">{event.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </main>
    </>
  );
}
