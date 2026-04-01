<<<<<<< HEAD
function Home(){

  return(

    <div style={{padding:"20px"}}>

      <h1>Welcome to Eventopia</h1>

      <p>Discover and manage amazing events.</p>

    </div>

  )

}

export default Home
=======
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", color: "white" }}>

      {/* HERO SECTION */}
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            animation: "fadeIn 2s ease",
          }}
        >
          <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>
            🎉 Welcome to Eventopia
          </h1>

          <p style={{ maxWidth: "600px", margin: "auto" }}>
            Discover amazing events, book tickets, and experience unforgettable
            moments with Eventopia.
          </p>

          <Link to="/events">
            <button style={btnStyle}>
              Explore Events 🚀
            </button>
          </Link>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div style={{ padding: "50px", background: "#111" }}>
        <h2 style={{ textAlign: "center" }}>About Eventopia</h2>

        <p style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
          Eventopia is your one-stop platform for discovering tech fests,
          concerts, workshops, and more. We connect people with experiences.
        </p>
      </div>

      {/* FEATURED EVENTS */}
      <div style={{ padding: "50px", background: "#0d0d0d" }}>
        <h2 style={{ textAlign: "center" }}>Featured Events</h2>

        <div style={gridStyle}>
          {[
            {
              title: "Tech Fest 2026",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              desc: "Coding, robotics & innovation showcase.",
            },
            {
              title: "Music Night",
              img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
              desc: "Live DJs and energetic performances.",
            },
            {
              title: "Startup Summit",
              img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
              desc: "Meet entrepreneurs & investors.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "50px", background: "#111" }}>
        <h2 style={{ textAlign: "center" }}>Why Choose Eventopia?</h2>

        <ul style={{ maxWidth: "600px", margin: "auto" }}>
          <li>✨ Discover events easily</li>
          <li>🎟️ Quick booking system</li>
          <li>📢 Stay updated</li>
          <li>⚡ Easy event management</li>
        </ul>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "60px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #ff7a18, #ff4b2b)",
        }}
      >
        <h2>Ready to Explore?</h2>

        <Link to="/events">
          <button style={btnStyle}>
            View All Events 🎯
          </button>
        </Link>
      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(30px);}
            to {opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

/* STYLES */
const btnStyle = {
  marginTop: "20px",
  padding: "12px 25px",
  border: "none",
  borderRadius: "8px",
  background: "linear-gradient(90deg, #ff7a18, #ff4b2b)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "15px",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  transition: "0.3s",
};

export default Home;
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
