import React from "react";
import Navbar from "../../components/Navbar";
import "./EventsPage.css";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      image: "https://placehold.co/500x300/cccccc/000000?text=Event+1",
      date: "Nov 10, 2025",
      description: "Vinyl Listening Party — exclusive LP releases & artist Q&A.",
    },
    {
      id: 2,
      image: "https://placehold.co/500x300/cccccc/000000?text=Event+2",
      date: "Dec 3, 2025",
      description: "Live showcase featuring local Terrapin artists.",
    },
    {
      id: 3,
      image: "https://placehold.co/500x300/cccccc/000000?text=Event+3",
      date: "Jan 15, 2026",
      description: "Studio open house — behind the scenes of album production.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="events-page">
        <h2 className="events-heading">Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.description} />
              <div className="event-content">
                <p className="event-date">{event.date}</p>
                <p className="event-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
