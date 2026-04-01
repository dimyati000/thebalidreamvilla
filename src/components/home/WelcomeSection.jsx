import ArrowRight from "../icons/ArrowRight";

export default function WelcomeSection({
  labelStyle,
  visible,
  onContactClick,
}) {
  return (
    <section className={`bali-up d1 ${visible ? "on" : ""}`}>
      <p style={labelStyle}>Welcome</p>
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
        comfort, privacy, and unforgettable moments. From thoughtfully curated
        rooms to personalized services, we are here to make your stay truly
        special. Enjoy a relaxing atmosphere, warm hospitality, and everything
        you need for a memorable stay.
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
        If you need any assistance, our team is always ready to help—just one
        click away.
      </p>
      <button className="ghost-btn font-bold" onClick={onContactClick}>
        Contact Us <ArrowRight />
      </button>
    </section>
  );
}
