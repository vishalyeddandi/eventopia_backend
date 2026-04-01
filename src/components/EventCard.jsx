<<<<<<< HEAD
function EventCard({event}) {

  return (

    <div style={{
      border:"1px solid gray",
      padding:"15px",
      margin:"10px"
    }}>

      <h3>{event.title}</h3>

      <p>{event.description}</p>

      <p><b>Date:</b> {event.date}</p>

      <p><b>Location:</b> {event.location}</p>

    </div>

  );

=======
function EventCard({ event }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        padding: "20px",
        margin: "15px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{event.title}</h3>
      <p style={{ opacity: 0.9 }}>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
}

export default EventCard;