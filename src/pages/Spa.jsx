import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BackIcon from "../components/icons/BackIcon";
import spa1 from "../assets/spa/spa-1.webp";
import spa2 from "../assets/spa/spa-2.webp";
import spa3 from "../assets/spa/spa-3.webp";
import spa4 from "../assets/spa/spa-4.webp";
import spa5 from "../assets/spa/spa-5.webp";

const spaImages = [spa1, spa2, spa3, spa4, spa5];

export default function Spa() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full font-serif bg-gradient-to-br from-[#6b5344] to-[#4a3728]">
      {/* NAVBAR */}
      <div className="sticky top-0 z-10 flex items-center gap-3 p-4 bg-black/20 backdrop-blur-sm">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-[#fff0d233] text-[#f8ebd2] hover:bg-white/20 transition"
        >
          <BackIcon />
        </button>

        <h1 className="text-white text-2xl tracking-wide font-normal">Spa</h1>
      </div>

      {/* GALLERY */}
      <div className="flex flex-col">
        {spaImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Spa ${i + 1}`}
            className="w-full h-auto block object-cover"
          />
        ))}
      </div>
    </div>
  );
}
