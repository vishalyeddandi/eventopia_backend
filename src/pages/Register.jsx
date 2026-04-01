import { useState } from "react";
<<<<<<< HEAD
import { registerUser } from "../services/api";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      await registerUser({name,email,password});

      alert("Registration Successful");

    }
    catch(err){

      alert("Registration Failed");

    }

  }

  return(

    <div style={{padding:"20px"}}>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Register</button>

      </form>

    </div>

  )

}

export default Register
=======

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = { name, email, event, tickets };
    console.log("Booking Details:", bookingData);

    setMessage("🎉 Event Booked Successfully!");

    setName("");
    setEmail("");
    setEvent("");
    setTickets("");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
        }}
      ></div>

      {/* Glass Card */}
      <div
        style={{
          position: "relative",
          width: "350px",
          padding: "30px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          🎟️ Book Your Event
        </h2>

        <p style={{ textAlign: "center", fontSize: "14px", opacity: 0.8 }}>
          Reserve your spot for amazing experiences
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            placeholder="👤 Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="📧 Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Event */}
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">🎉 Choose Event</option>
            <option>Tech Fest 2026</option>
            <option>Music Night</option>
            <option>Startup Summit</option>
            <option>AI Workshop</option>
            <option>Cultural Fest</option>
          </select>

          {/* Tickets */}
          <input
            type="number"
            placeholder="🎫 Number of Tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(90deg, #ff7a18, #ff4b2b)",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            🚀 Book Now
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: "#00ffcc",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

/* ✅ Unified Input Style (FIXED) */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.9)", // 👈 same as dropdown
  color: "#333", // 👈 dark text for visibility
};

export default Booking;
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
