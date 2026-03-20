import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BackIcon from "../components/BackIcon";
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
    <div
      className="spa-page"
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        minHeight: "100vh",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        position: "relative",
        background: "linear-gradient(135deg,#6b5344 0%,#4a3728 100%)",
      }}
    >
      <style>{`

        .spa-page{
          opacity:1;
          transform:translateY(0);
        }

        .spa-gradient-overlay{
          position:fixed;
          inset:0;
          background:linear-gradient(135deg,#6b5344 0%,#4a3728 100%);
          z-index:-1;
        }

        .spa-gallery{
          display:flex;
          flex-direction:column;
          gap:0;
          padding:0;
          margin:0;
        }

        .spa-gallery img{
          width:100%;
          height:auto;
          display:block;
          border-radius:0;
          margin:0;
          padding:0;
        }

        @media (max-width:640px){
          .spa-gallery{
            gap:0;
            padding:0;
          }
          .spa-gallery img{
            border-radius:0;
          }
        }

      `}</style>

      {/* background */}
      <div className="spa-gradient-overlay" />

      {/* NAV */}
      <div
        style={{
          padding: "16px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
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
          <BackIcon />
        </button>
        <h1
          style={{
            margin: 0,
            fontSize: "24px",
            color: "#ffffff",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          Spa
        </h1>
      </div>

      {/* GALLERY */}
      <div className="spa-gallery">
        {spaImages.map((img, i) => (
          <img key={i} src={img} alt={`Spa ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
