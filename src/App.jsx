<<<<<<< HEAD
function App() {
  return (
    <div>
      <h1>Eventopia Project Running</h1>
    </div>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>

    </BrowserRouter>

>>>>>>> 734ed722c0422efc24da9e870f9833644e2ce5e6
  );
}

export default App;