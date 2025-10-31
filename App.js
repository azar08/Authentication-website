import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trial from "./trial";
import Signup from "./signup";
import Login from "./login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trial />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
