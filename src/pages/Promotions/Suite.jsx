import { useNavigate } from "react-router-dom";
import BackIcon from "../../components/BackIcon";
import suite1 from "../../assets/promotions/suite.jpg";

const suiteImages = [suite1];

export default function Promo() {
  const navigate = useNavigate();

  return (
    <div
      className="suite-page"
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

        .suite-page{
          opacity:1;
          transform:translateY(0);
        }

        .suite-gradient-overlay{
          position:fixed;
          inset:0;
          background:linear-gradient(135deg,#6b5344 0%,#4a3728 100%);
          z-index:-1;
        }

        .suite-gallery{
          display:flex;
          flex-direction:column;
          gap:0;
          padding:0;
          margin:0;
        }

        .suite-gallery img{
          width:100%;
          height:auto;
          display:block;
          border-radius:0;
          margin:0;
          padding:0;
        }

        @media (max-width:640px){
          .suite-gallery{
            gap:0;
            padding:0;
          }
          .suite-gallery img{
            border-radius:0;
          }
        }

      `}</style>

      {/* background */}
      <div className="suite-gradient-overlay" />

      {/* NAV */}
      <div
        style={{
          padding: "6px",
          position: "sticky",
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.76)",
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
            background: "rgba(255,255,255,0.3)",
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
            lettersuitecing: "1px",
          }}
        >
          Suite
        </h1>
      </div>

      {/* GALLERY */}
      <div className="suite-gallery">
        {suiteImages.map((img, i) => (
          <img key={i} src={img} alt={`suite ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
