import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import villaImage from "../assets/Villa.jpeg";
import BackIcon from "../components/BackIcon";
import SpaIcon from "../components/icons/SpaIcon";
import RoomServiceIcon from "../components/icons/RoomServiceIcon";
import BookIcon from "../components/icons/BookIcon";
import ScrollIcon from "../components/icons/ScrollIcon";
import FacilitiesIcon from "../components/icons/FacilitiesIcon";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  { name: "Spa", subtitle: "Wellness & Ritual", Icon: SpaIcon },
  { name: "Room Service", subtitle: "In-Villa Dining", Icon: RoomServiceIcon },
  { name: "Villa Compendium", subtitle: "Villa Guide", Icon: BookIcon },
  { name: "Villa Rules", subtitle: "Policies & Info", Icon: ScrollIcon },
  {
    name: "Facilities & Activities",
    subtitle: "Pool, Garden & Amenities",
    Icon: FacilitiesIcon,
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full max-w-md mx-auto"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .svc-up { opacity:0; transform:translateY(16px); transition:opacity .6s ease,transform .6s ease; }
        .svc-up.on { opacity:1; transform:translateY(0); }
        .s0{transition-delay:.05s} .s1{transition-delay:.13s} .s2{transition-delay:.21s}
        .s3{transition-delay:.29s} .s4{transition-delay:.37s} .s5{transition-delay:.45s}
        .hdr{transition-delay:.0s}  .ttl{transition-delay:.12s} .ftr{transition-delay:.55s}

        .svc-card {
          background: rgba(255,245,228,0.07);
          border: 0.5px solid rgba(255,240,210,0.14);
          border-radius: 4px;
          transition: background .3s ease, transform .25s ease;
          cursor: pointer;
        }
        .svc-card:hover {
          background: rgba(255,245,228,0.14);
          transform: scale(1.02);
        }
        .svc-card:active { transform: scale(0.98); }

        .icon-wrap {
          transition: background .3s ease, transform .3s ease;
        }
        .svc-card:hover .icon-wrap {
          background: rgba(255,240,210,0.2) !important;
          transform: rotate(5deg);
        }

        .nav-btn {
          transition: background .2s ease;
        }
        .nav-btn:hover { background: rgba(255,255,255,0.2) !important; }
      `}</style>

      {/* BG PHOTO */}
      <img
        src={villaImage}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(158deg, rgba(28,16,6,0.42) 0%, rgba(24,12,3,0.52) 40%, rgba(20,8,0,0.62) 100%)",
        }}
      />

      {/* WARM TINT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at 60% 10%, rgba(180,130,80,0.25) 0%, transparent 55%)",
        }}
      />

      {/* NOISE */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.022,
          zIndex: 3,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="n2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n2)" />
      </svg>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 20px 32px",
        }}
      >
        {/* TOP NAV*/}
        <div
          className={`svc-up hdr ${visible ? "on" : ""}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "52px",
            paddingBottom: "8px",
          }}
        >
          {[{ action: () => navigate("/"), Icon: BackIcon }].map(
            ({ action, Icon }, i) => (
              <button
                key={i}
                className="nav-btn"
                onClick={action}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "0.5px solid rgba(255,240,210,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248,235,210,0.88)",
                  cursor: "pointer",
                }}
              >
                <Icon />
              </button>
            ),
          )}
        </div>

        {/* TITLE */}
        <div
          className={`svc-up ttl ${visible ? "on" : ""}`}
          style={{ padding: "28px 4px 24px" }}
        >
          <p
            style={{
              fontFamily: "'Jost',sans-serif",
              fontSize: "9.5px",
              letterSpacing: "3.5px",
              color: "rgba(200,168,120,0.72)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            The Bali Dream Villa
          </p>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "300",
              color: "rgba(252,244,230,0.97)",
              letterSpacing: "1.5px",
              fontStyle: "italic",
              lineHeight: "1.15",
            }}
          >
            Our Services
          </h1>
          <div
            style={{
              width: "32px",
              height: "0.5px",
              background: "rgba(200,168,120,0.42)",
              marginTop: "15px",
            }}
          />
        </div>

        {/* FROSTED PANEL*/}
        <div
          style={{
            borderRadius: "14px",
            background: "rgba(10,5,1,0.52)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "0.5px solid rgba(255,240,210,0.1)",
            padding: "22px 18px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {services.map((service, i) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                subtitle={service.subtitle}
                Icon={service.Icon}
                isVisible={visible}
                delayClass={`s${i}`}
                onClick={() => {
                  if (service.name === "Spa") {
                    navigate("/spa");
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className={`svc-up ftr ${visible ? "on" : ""}`}
          style={{
            marginTop: "22px",
            paddingTop: "18px",
            borderTop: "0.5px solid rgba(255,240,210,0.1)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {["www.thebalidream.com", "+62 361 737 788"].map((t, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "11px",
                fontWeight: "300",
                color: "rgba(188,158,112,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
