import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Plots from "./pages/Plots";
import FloatingContact from "./components/FloatingContact";
import EmiCalculator from "./pages/EmiCalculator";
import AreaConverter from "./pages/AreaConverter";

function App() {
  return (
    <>
      <ScrollToTop />
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/area-converter" element={<AreaConverter />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <FloatingContact />
    </>
  );
}

export default App;
