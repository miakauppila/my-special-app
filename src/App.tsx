import { Routes, Route } from "react-router-dom";
import About from './components/About';
import NotFound from "./components/NotFound";
import PatientDetails from './components/PatientDetails';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Patient system</h1>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/about" element={<About />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
