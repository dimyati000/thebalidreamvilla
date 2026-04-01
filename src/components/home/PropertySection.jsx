export default function PropertySection({ labelStyle, visible }) {
  const properties = [
    "Bali Dream Villa Suites",
    "Bali Dream Villa Canggu",
    "Bali Dream Villa 1",
    "Bali Dream Villa 2",
  ];

  return (
    <section className={`bali-up d4 ${visible ? "on" : ""}`}>
      <p style={labelStyle}>Our Property</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {properties.map((name, i) => (
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
  );
}
