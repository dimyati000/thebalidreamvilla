import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import villaImage from "../assets/Villa.jpeg";
import logo from "../assets/logo.webp";

const PhoneIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 8.18 8.18l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const promos = [
    { title: "Garden\nRelaxation", tag: "Nature" },
    { title: "Breakfast\nSpecial", tag: "Dining" },
    { title: "Tropical\nWalk", tag: "Adventure" },
  ];

  const label = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "9.5px",
    letterSpacing: "3px",
    color: "rgba(205,178,138,0.82)",
    textTransform: "uppercase",
    marginBottom: "14px",
  };

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

        .bali-up { opacity:0; transform:translateY(18px); transition:opacity .7s ease,transform .7s ease; }
        .bali-up.on { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.08s} .d2{transition-delay:.18s}
        .d3{transition-delay:.3s}  .d4{transition-delay:.42s}
        .d5{transition-delay:.54s}

        .svc-row {
          background: rgba(255,245,230,0.07);
          border: 0.5px solid rgba(255,240,210,0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 3px;
          transition: background .3s ease, transform .25s ease;
        }
        .svc-row:hover { background: rgba(255,245,230,0.13); transform:translateX(3px); }

        .promo-tile {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 3px;
          overflow: hidden;
          transition: transform .4s ease;
          cursor: pointer;
        }
        .promo-tile:hover { transform: translateY(-4px); }

        .ghost-btn {
          position:relative; display:inline-flex; align-items:center; gap:10px;
          background:none; border:none; cursor:pointer; padding:4px 0;
          font-family:'Jost',sans-serif; font-size:10.5px; letter-spacing:2.5px;
          text-transform:uppercase; color:rgba(235,210,175,0.9);
          transition:color .3s ease;
        }
        .ghost-btn::after {
          content:''; position:absolute; bottom:0; left:0;
          height:0.5px; width:0; background:rgba(220,185,140,0.8);
          transition:width .4s ease;
        }
        .ghost-btn:hover::after { width:100%; }
        .ghost-btn:hover { color:rgba(255,238,210,1); }
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
          objectPosition: "center 30%",
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(168deg, rgba(30,18,8,0.38) 0%, rgba(26,14,6,0.48) 35%, rgba(22,10,3,0.55) 100%)",
        }}
      />

      {/* WARM RADIAL TINT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at 65% 5%, rgba(180,130,80,0.25) 0%, transparent 55%)",
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
        <filter id="n">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          className={`bali-up ${visible ? "on" : ""}`}
          style={{
            padding: "40px 24px 26px",
            borderBottom: "0.5px solid rgba(255,240,210,0.12)",
            textAlign: "center",
          }}
        >
          <img
            src={logo}
            alt="The Bali Dream"
            style={{
              height: "70px",
              margin: "0 auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* FROSTED CONTENT PANEL*/}
        <div
          style={{
            margin: "20px 16px 16px",
            borderRadius: "14px",
            background: "rgba(18,10,4,0.42)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "0.5px solid rgba(255,240,210,0.15)",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "28px 20px 24px",
            gap: "36px",
          }}
        >
          {/* WELCOME */}
          <section className={`bali-up d1 ${visible ? "on" : ""}`}>
            <p style={label}>Welcome</p>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "300",
                color: "rgba(252,244,230,0.97)",
                lineHeight: "1.25",
                marginBottom: "15px",
                fontStyle: "italic",
              }}
            >
              A Peaceful Sanctuary
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "27px",
                }}
              >
                in the Heart of Bali
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "13px",
                fontWeight: "300",
                color: "rgba(225,205,172,0.88)",
                lineHeight: "1.9",
                marginBottom: "20px",
              }}
            >
              Welcome to The Bali Dream Villa, a peaceful sanctuary designed for
              comfort, privacy, and unforgettable moments. From thoughtfully
              curated rooms to personalized services, we are here to make your
              stay truly special. Enjoy a relaxing atmosphere, warm hospitality,
              and everything you need for a memorable stay.
            </p>

            <p
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "13px",
                fontWeight: "300",
                color: "rgba(225,205,172,0.88)",
                lineHeight: "1.9",
                marginBottom: "10px",
              }}
            >
              If you need any assistance, our team is always ready to help—just
              one click away.
            </p>
            <button
              className="ghost-btn font-bold"
              onClick={() =>
                footerRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us <ArrowRight />
            </button>
          </section>

          {/* SERVICES */}
          <section className={`bali-up d2 ${visible ? "on" : ""}`}>
            <p style={label}>Services</p>
            <button
              className="svc-row"
              onClick={() => navigate("/services")}
              style={{
                width: "100%",
                padding: "17px 18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,240,210,0.1)",
                  border: "0.5px solid rgba(255,240,210,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(218,185,140,0.9)",
                  flexShrink: 0,
                }}
              >
                <SparkleIcon />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Jost',sans-serif",
                    fontSize: "12.5px",
                    fontWeight: "500",
                    color: "rgba(250,242,228,0.97)",
                    marginBottom: "4px",
                    letterSpacing: "0.3px",
                  }}
                >
                  Explore Our Services
                </p>
                <p
                  style={{
                    fontFamily: "'Jost',sans-serif",
                    fontSize: "11px",
                    color: "rgba(200,172,132,0.78)",
                    letterSpacing: "0.4px",
                  }}
                >
                  Spa · Room Service · Facilities · Activities
                </p>
              </div>
              <div style={{ color: "rgba(195,168,128,0.55)" }}>
                <ArrowRight />
              </div>
            </button>
          </section>

          {/* PROMOTION */}
          <section className={`bali-up d3 ${visible ? "on" : ""}`}>
            <p style={label}>Promotions</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "8px",
              }}
            >
              {promos.map((promo, i) => (
                <div
                  key={i}
                  className="promo-tile"
                  style={{
                    background:
                      i === 1 ? "rgba(20,10,2,0.82)" : "rgba(255,245,230,0.07)",
                    border:
                      i === 1
                        ? "0.5px solid rgba(170,120,55,0.38)"
                        : "0.5px solid rgba(255,240,210,0.14)",
                    padding: "20px 12px 16px",
                    minHeight: "92px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "8.5px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color:
                        i === 1
                          ? "rgba(190,148,88,0.88)"
                          : "rgba(200,172,132,0.65)",
                      marginBottom: "8px",
                    }}
                  >
                    {promo.tag}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "300",
                      fontStyle: "italic",
                      color:
                        i === 1
                          ? "rgba(250,238,215,0.97)"
                          : "rgba(245,235,218,0.92)",
                      lineHeight: "1.4",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {promo.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* OUR PROPERTY */}
          <section className={`bali-up d4 ${visible ? "on" : ""}`}>
            <p style={label}>Our Property</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {[
                "Bali Dream Villa Suites",
                "Bali Dream Villa Canggu",
                "Bali Dream Villa 1",
                "Bali Dream Villa 2",
              ].map((name, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(200,168,120,0.6)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "300",
                      color: "rgba(230,210,180,0.88)",
                    }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* HEAD OFFICE */}
          <section
            className={`bali-up d4 ${visible ? "on" : ""}`}
            style={{
              borderTop: "0.5px solid rgba(255,240,210,0.08)",
              paddingTop: "32px",
            }}
          >
            <p style={label}>Head Office</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {/* Address */}
              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  style={{
                    width: "31px",
                    height: "31px",
                    borderRadius: "50%",
                    background: "rgba(255,240,210,0.08)",
                    border: "0.5px solid rgba(255,240,210,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(200,168,120,0.85)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Jost',sans-serif",
                    fontSize: "12.5px",
                    fontWeight: "300",
                    color: "rgba(230,210,180,0.88)",
                    lineHeight: "1.7",
                  }}
                >
                  Jl. Dewi Saraswati III, Seminyak,
                  <br />
                  Kec. Kuta, Kabupaten Badung,
                  <br />
                  Bali 80361
                </p>
              </div>
              {/* Email */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "31px",
                    height: "31px",
                    borderRadius: "50%",
                    background: "rgba(255,240,210,0.08)",
                    border: "0.5px solid rgba(255,240,210,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(200,168,120,0.85)",
                    flexShrink: 0,
                  }}
                >
                  <MailIcon />
                </div>
                <p
                  style={{
                    fontFamily: "'Jost',sans-serif",
                    fontSize: "12.5px",
                    fontWeight: "300",
                    color: "rgba(230,210,180,0.88)",
                    wordBreak: "break-all",
                  }}
                >
                  info@thebalidreamvilla.com
                </p>
              </div>
              {/* Phone */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "31px",
                    height: "31px",
                    borderRadius: "50%",
                    background: "rgba(255,240,210,0.08)",
                    border: "0.5px solid rgba(255,240,210,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(200,168,120,0.85)",
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "300",
                      color: "rgba(230,210,180,0.88)",
                    }}
                  >
                    +62 361 737788
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "300",
                      color: "rgba(230,210,180,0.88)",
                    }}
                  >
                    +62 878 0651 4620
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FOLLOW US */}
          <section
            className={`bali-up d5 ${visible ? "on" : ""}`}
            style={{
              borderTop: "0.5px solid rgba(255,240,210,0.08)",
              paddingTop: "32px",
            }}
          >
            <p style={label}>Follow Us</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  ),
                },
                {
                  label: "www.thebalidreamvilla.com",
                  href: "https://thebalidreamvilla.krisnagentawinangun.com/",
                  icon: (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
              ].map(({ label: lbl, icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "31px",
                      height: "31px",
                      borderRadius: "50%",
                      background: "rgba(255,240,210,0.08)",
                      border: "0.5px solid rgba(255,240,210,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(200,168,120,0.85)",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Jost',sans-serif",
                      fontSize: "12.5px",
                      fontWeight: "300",
                      color: "rgba(230,210,180,0.88)",
                    }}
                  >
                    {lbl}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div
          ref={footerRef}
          className={`bali-up d5 ${visible ? "on" : ""}`}
          style={{ padding: "16px 24px 28px", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "'Jost',sans-serif",
              fontSize: "9.5px",
              letterSpacing: "2.5px",
              color: "rgba(175,148,108,0.45)",
              textTransform: "uppercase",
            }}
          >
            © The Bali Dream Villa
          </p>
        </div>
      </div>
    </div>
  );
}
