import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Belege from "./pages/Belege";

import Tarife from "./pages/Tarife";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Kontạkt from "./pages/Kontạkt";


// import { Navbar } from "./pages/Navbar";
import Navbar from "./pages/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/belege" element={<Belege />} />
          <Route path="/menu" element={<Menu />} />
          
          <Route path="/tarife" element={<Tarife />} />
          <Route path="/service" element={<Service />} />
          <Route path="/kontạkt" element={<Kontạkt />} />
         

          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
     </div>
  );
}

export default App;
