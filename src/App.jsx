import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Spa from "./pages/Spa";
import Canggu from "./pages/Promotions/Canggu";
import Seminyak from "./pages/Promotions/Seminyak";
import Suite from "./pages/Promotions/Suite";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-md mx-auto bg-stone-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/canggu" element={<Canggu />} />
          <Route path="/seminyak" element={<Seminyak />} />
          <Route path="/suite" element={<Suite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
