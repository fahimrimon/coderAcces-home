import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Certification from "./components/Certification/Certification";
import Environment from "./components/Environment/Environment";
import Explore from "./components/Exploring/Explore";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Preparation from "./components/Preparation/Preparation";
import ReadyMessage from "./components/ReadyMessage/ReadyMessage";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/banner" element={<Banner></Banner>}></Route>
        <Route path="/explores" element={<Explore></Explore>}></Route>
        <Route path="/preparation" element={<Preparation></Preparation>}></Route>
        <Route path="/certification" element={<Certification></Certification>}></Route>
        <Route path="/testimonials" element={<Testimonials></Testimonials>}></Route>
        <Route path="/environment" element={<Environment></Environment>}></Route>
        <Route path="/ready" element={<ReadyMessage></ReadyMessage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
