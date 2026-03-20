import { useNavigate } from "react-router-dom";
import canggu from "../../assets/promotions/canggu.jpg";
import seminyak from "../../assets/promotions/seminyak.jpg";
import suite from "../../assets/promotions/suite.jpg";

const promosData = [
  {
    tag: "Canggu",
    // title: "Garden\nRelaxation",
    image: canggu,
    path: "/canggu",
  },
  {
    tag: "Seminyak",
    // title: "Breakfast\nSpecial",
    image: seminyak,
    path: "/seminyak",
  },
  {
    tag: "Suite",
    // title: "Tropical\nWalk",
    image: suite,
    path: "/suite",
  },
];

export default function PromotionsSection({ labelStyle, visible }) {
  const navigate = useNavigate();

    return (
    <section className={`bali-up d3 ${visible ? "on" : ""}`}>
      <p style={labelStyle}>Promotions</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "8px",
        }}
      >
        {promosData.map((promo, i) => (
          <div
            key={i}
            className="promo-tile"
            style={{
              background: "rgba(255,245,230,0.07)",
              border: "0.5px solid rgba(255,240,210,0.14)",
              // background:
              //   i === 1
              //     ? "rgba(20,10,2,0.82)"
              //     : "rgba(255,245,230,0.07)",
              // border:
              //   i === 1
              //     ? "0.5px solid rgba(170,120,55,0.38)"
              //     : "0.5px solid rgba(255,240,210,0.14)",
              padding: "5px",
              minHeight: "120px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* TEXT */}
            <p
              style={{
                textAlign: "center",
                fontFamily: "'Jost',sans-serif",
                fontSize: "8.5px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(200,172,132,0.65)",
                // color:
                //   i === 1
                //     ? "rgba(190,148,88,0.88)"
                //     : "rgba(200,172,132,0.65)",
              }}
            >
              {promo.tag}
            </p>

            <p
              style={{
                fontSize: "13px",
                fontStyle: "italic",
                color:
                  i === 1
                    ? "rgba(250,238,215,0.97)"
                    : "rgba(245,235,218,0.92)",
                lineHeight: "1.3",
                whiteSpace: "pre-line",
              }}
            >
              {promo.title}
            </p>
            {/* ✅ GAMBAR */}
            <img
              src={promo.image}
              alt={promo.tag}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
              delayClass={`s${i}`}
              onClick={() => navigate(promo.path)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}