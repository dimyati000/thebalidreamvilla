import InfoIconCircle from "../InfoIconCircle";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

export default function HeadOfficeSection({ labelStyle, visible }) {
  return (
    <section
      className={`bali-up d4 ${visible ? "on" : ""}`}
      style={{
        borderTop: "0.5px solid rgba(255,240,210,0.08)",
        paddingTop: "32px",
      }}
    >
      <p style={labelStyle}>Head Office</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <InfoIconCircle>
            <MailIcon />
          </InfoIconCircle>
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

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <InfoIconCircle>
            <PhoneIcon />
          </InfoIconCircle>
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
  );
}
