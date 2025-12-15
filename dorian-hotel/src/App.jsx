import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Amenities from "./pages/Amenities/Amenities";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import Booking from "./pages/Booking/Booking";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetails />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
