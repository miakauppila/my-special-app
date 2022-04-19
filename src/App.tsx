import { Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import About from './components/About';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import PatientDetails from './components/PatientDetails';
import PatientList from './components/PatientList';
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/about" element={<About />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
