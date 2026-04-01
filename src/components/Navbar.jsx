import { Link } from "react-router-dom";

function Navbar() {
<<<<<<< HEAD

  return (

    <nav style={{padding:"10px", background:"#333"}}>

      <Link to="/" style={{color:"white", marginRight:"15px"}}>Home</Link>

      <Link to="/events" style={{color:"white", marginRight:"15px"}}>Events</Link>

      <Link to="/login" style={{color:"white", marginRight:"15px"}}>Login</Link>

      <Link to="/register" style={{color:"white"}}>Register</Link>

    </nav>

  );

=======
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #141e30, #243b55)",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      {["Home", "Events", "Login", "Register"].map((item, index) => {
        const path =
          item === "Home"
            ? "/"
            : `/${item.toLowerCase()}`;

        return (
          <Link
            key={index}
            to={path}
            style={{
              color: "#f1f1f1",
              textDecoration: "none",
              fontWeight: "500",
              padding: "8px 15px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.15)";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#f1f1f1";
            }}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
}

export default Navbar;