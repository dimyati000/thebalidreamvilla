import { useNavigate } from "react-router-dom";
import BackIcon from "../components/icons/BackIcon";

export default function GalleryPage({ title, images = [] }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-cormorant bg-gradient-to-br from-[#6b5344] to-[#4a3728]">
      {/* NAVBAR */}
      <div
        className="sticky top-0 z-20 flex items-center gap-5 px-4 
      bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center 
          rounded-full bg-white/10 border border-white/20 
          text-[#f8ebd2] hover:bg-white/20 transition"
        >
          <BackIcon />
        </button>

        <h1
          className="text-white text-[20px] pt-[10px] font-medium 
          tracking-[0.5px] leading-tight"
        >
          {title}
        </h1>
      </div>

      {/* GALLERY */}
      <div className="flex flex-col">
        {images.map((img, i) => (
          <div key={i} className="w-full">
            <img
              src={img}
              alt={`${title} ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
