import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import villaImage from "../assets/Villa.jpeg";
import Spa from "./Spa";

const BackIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SpaIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c-4.97 0-9-4.03-9-9 0-3.18 1.67-6.14 4.38-7.82A9.01 9.01 0 0 1 12 4c1.65 0 3.24.46 4.62 1.18A8.98 8.98 0 0 1 21 13c0 4.97-4.03 9-9 9z" />
    <path d="M12 22V11" />
    <path d="M12 11c0 0-2-3-5-3" />
    <path d="M12 11c0 0 2-3 5-3" />
  </svg>
);

const RoomServiceIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 17h18" />
    <path d="M12 3a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7z" />
    <path d="M12 3v2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

const BookIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ScrollIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6M9 17h3" />
  </svg>
);

const FacilitiesIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

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
              <div
                key={i}
                className={`svc-card svc-up s${i} ${visible ? "on" : ""}`}
                onClick={() => {
                  if (service.name === "Spa") {
                    navigate("/spa");
                  }
                }}
                style={{
                  padding: "20px 16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  className="icon-wrap"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(255,240,210,0.1)",
                    border: "0.5px solid rgba(255,240,210,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(218,188,145,0.92)",
                  }}
                >
                  <service.Icon />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "500",
                      color: "rgba(250,242,228,0.97)",
                      letterSpacing: "0.3px",
                      marginBottom: "4px",
                    }}
                  >
                    {service.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "10.5px",
                      fontWeight: "300",
                      color: "rgba(198,168,125,0.82)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>
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
