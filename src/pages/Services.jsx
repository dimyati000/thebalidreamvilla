import { useNavigate } from "react-router-dom";
import villaImage from "../assets/Villa.jpeg";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { name: "SPA", icon: "💆" },
    { name: "ROOM SERVICE", icon: "🛎️" },
    { name: "COMPENDIUM", icon: "📖" },
    { name: "VILLA RULES", icon: "📜" },
    { name: "FACILITIES", icon: "🏖️" },
    { name: "ACTIVITIES", icon: "🏄" },
  ];

  return (
    <div className="w-full max-w-md mx-auto h-screen relative overflow-hidden">
      {/* Background */}
      <img
        src={villaImage}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* GLASS PANEL */}
      <div className="absolute inset-4 rounded-[30px] backdrop-blur-md bg-black/30 border border-white/20 flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between px-5 pt-5">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>

          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
            ⚙
          </button>
        </div>

        {/* TITLE */}
        <div className="px-6 pt-5 pb-6">
          <h1 className="text-white text-3xl font-semibold tracking-wide drop-shadow-lg">
            Services
          </h1>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-3 gap-6 px-6">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-lg text-black font-bold">
                {service.icon}
              </div>

              <p className="!text-white text-sm mt-2 text-center font-bold drop-shadow-lg [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                {service.name}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-auto text-center text-white/80 text-xs pb-6 pt-6 border-t border-white/20">
          www.thebalidream.com
          <br />
          +62 361 737 788
        </div>
      </div>
    </div>
  );
}
