import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import villaImage from "../assets/Villa.jpeg";
import logo from "../assets/logo.webp";
import ServicesSection from "../components/home/ServicesSection";
import PromotionsSection from "../components/home/PromotionsSection";
import HeadOfficeSection from "../components/home/HeadOfficeSection";
import FollowUsSection from "../components/home/FollowUsSection";
import FooterCopyright from "../components/FooterCopyright";
import canggu from "../assets/promotions/canggu.jpg";
import seminyak from "../assets/promotions/seminyak.jpg";
import suite from "../assets/promotions/suite.jpg";

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
  {
    title: "Garden\nRelaxation",
    tag: "Nature",
    image: canggu,
  },
  {
    title: "Breakfast\nSpecial",
    tag: "Dining",
    image: seminyak,
  },
  {
    title: "Tropical\nWalk",
    tag: "Adventure",
    image: suite,
  },
];

  const labelStyle = {
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
    
          <ServicesSection
            labelStyle={labelStyle}
            visible={visible}
          />

          <PromotionsSection
            labelStyle={labelStyle}
            visible={visible}
            promos={promos}
          />

          <HeadOfficeSection labelStyle={labelStyle} visible={visible} />

          <FollowUsSection labelStyle={labelStyle} visible={visible} />
        </div>

        {/* FOOTER */}
        <FooterCopyright ref={footerRef} visible={visible} />
      </div>
    </div>
  );
}
