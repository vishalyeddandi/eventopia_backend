<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getEvents } from "../services/api";
import EventCard from "../components/EventCard";

function Events(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    getEvents().then((res)=>{

      setEvents(res.data);

    });

  },[]);

  return(

    <div style={{padding:"20px"}}>

      <h2>All Events</h2>

      {

        events.map((event)=>(

          <EventCard key={event.id} event={event}/>

        ))

      }

    </div>

  )

}

export default Events
=======
import { useState } from "react";

function Events() {
  const [events] = useState([
    {
      id: 1,
      title: "Tech Fest 2026",
      description: "Anurag university synergy ,concert night 2026.",
      date: "2026-04-04",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 2,
      title: "Music Night",
      description:
        "Live music concert featuring famous bands, DJs and performers.",
      date: "2026-05-10",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      id: 3,
      title: "Startup Summit",
      description:
        "Entrepreneurs and investors discuss startup ideas and innovation.",
      date: "2026-06-02",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
    {
      id: 4,
      title: "AI & ML Workshop",
      description:
        "Hands-on workshop on AI, neural networks and real-world apps.",
      date: "2026-06-18",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 5,
      title: "Cultural Fest",
      description:
        "Music, dance and drama performances by students.",
      date: "2026-07-05",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      id: 6,
      title: "Cyber Security Conference",
      description:
        "Experts discuss cyber threats and ethical hacking.",
      date: "2026-07-22",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    },
    {
      id: 7,
      title: "Gaming Tournament",
      description:
        "FIFA, PUBG and Valorant competitions with prizes.",
      date: "2026-08-12",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      id: 8,
      title: "Photography Exhibition",
      description:
        "Creative photography from professionals and students.",
      date: "2026-08-28",
      location: "Kolkata",
      image:
        "https://images.unsplash.com/photo-1504203700686-8b4c5c5f3c1b",
    },
  ]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "30px",
        color: "white",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      ></div>

      <h1 style={{ textAlign: "center", animation: "fadeIn 1s ease" }}>
        🎉 Upcoming Events
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Explore exciting events happening across different cities.
      </p>

      {/* Grid */}
      <div style={gridStyle}>
        {events.map((event, index) => (
          <div
            key={event.id}
            style={cardStyle}
            className="card"
          >
            <img
              src={event.image}
              alt={event.title}
              style={imgStyle}
            />

            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>📅</strong> {event.date}</p>
            <p><strong>📍</strong> {event.location}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          .card {
            animation: fadeUp 0.8s ease forwards;
          }

          .card:hover {
            transform: scale(1.05);
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

/* STYLES */
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "15px",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  transition: "0.3s",
};

const imgStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "10px",
};

export default Events;
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
