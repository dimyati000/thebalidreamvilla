import { useNavigate } from "react-router-dom";
import SpaIcon from "../icons/SpaIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import BookIcon from "../icons/BookIcon";
import ScrollIcon from "../icons/ScrollIcon";
import FacilitiesIcon from "../icons/FacilitiesIcon";
import ServiceCard from "../services/ServiceCard";

const services = [
  { name: "Spa", subtitle: "Wellness & Ritual", Icon: SpaIcon, path: "/spa" },
  { name: "Room Service", subtitle: "In-Villa Dining", Icon: RoomServiceIcon, path: "/room-service" },
  { name: "Villa Compendium", subtitle: "Villa Guide", Icon: BookIcon, path: "/compendium" },
  { name: "Villa Rules", subtitle: "Policies & Info", Icon: ScrollIcon, path: "/rules" },
  {
    name: "Facilities & Activities",
    subtitle: "Pool, Garden & Amenities",
    Icon: FacilitiesIcon,
    path: "/facilities",
  },
];

export default function ServicesSection({
  labelStyle,
  visible = true,
}) {
  const navigate = useNavigate();

  return (
    <section className={`bali-up d2 ${visible ? "on" : ""}`}>
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
      <p style={labelStyle}>Services</p>

      {/* <div
        style={{
          borderRadius: "14px",
          background: "rgba(10,5,1,0.52)",
          backdropFilter: "blur(22px)",
          padding: "16px",
        }}
      > */}
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
              isVisible={true}
              delayClass={`s${i}`}
              onClick={() => navigate(service.path)}
            />
          ))}
        </div>
      {/* </div> */}
    </section>
  );
}