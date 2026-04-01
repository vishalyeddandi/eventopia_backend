<<<<<<< HEAD
import { useState } from "react";
import { loginUser } from "../services/api";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const res = await loginUser({email,password});

      alert("Login Successful");

      console.log(res.data);

    }
    catch(err){

      alert("Login Failed");

    }

  }

  return(

    <div style={{padding:"20px"}}>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="email"
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

        <button type="submit">Login</button>

      </form>

    </div>

  )

}

export default Login
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
      setMessage("Login Successful ✅");

      setTimeout(() => {
        navigate("/register");
      }, 1000);
    } else {
      setMessage("Invalid Email or Password ❌");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* Login Card */}
      <div
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "15px",
          width: "300px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>🎵 Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              background: "#ff7a18",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#ff5500")}
            onMouseLeave={(e) => (e.target.style.background = "#ff7a18")}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>{message}</p>
      </div>
    </div>
  );
}

export default Login;
>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
