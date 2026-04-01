import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import spa1 from "./assets/spa/spa-1.webp";
import spa2 from "./assets/spa/spa-2.webp";
import spa3 from "./assets/spa/spa-3.webp";
import spa4 from "./assets/spa/spa-4.webp";
import spa5 from "./assets/spa/spa-5.webp";
import canggu1 from "./assets/promotions/canggu.jpg";
import seminyak1 from "./assets/promotions/seminyak.jpg";
import suite1 from "./assets/promotions/suite.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-stone-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/spa"
            element={
              <GalleryPage
                title="Spa"
                images={[spa1, spa2, spa3, spa4, spa5]}
              />
            }
          />

          <Route
            path="/canggu"
            element={<GalleryPage title="Canggu" images={[canggu1]} />}
          />

          <Route
            path="/seminyak"
            element={<GalleryPage title="Seminyak" images={[seminyak1]} />}
          />

          <Route
            path="/suite"
            element={<GalleryPage title="Suite" images={[suite1]} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
