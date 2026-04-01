import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import villaImg from "../assets/view-1.jpeg";
import logo from "../assets/logo.png";
import ServicesSection from "../components/home/ServicesSection";
import PromotionsSection from "../components/home/PromotionsSection";
import HeadOfficeSection from "../components/home/HeadOfficeSection";
import FollowUsSection from "../components/home/FollowUsSection";
import FooterCopyright from "../components/FooterCopyright";

export default function Home() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-cormorant bg-[#342818] min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[260px] md:h-full xl:h-full 2xl:h-full w-full">
        <img
          src={villaImg}
          alt=""
          className="w-full h-full object-cover object-[center_30%] xl:object-[center_20%] 2xl:object-[center_10%] brightness-75"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown/10 via-black/40 to-[#342818]" />

        {/* subtle warm tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(212,175,55,0.15),transparent_60%)]" />

        {/* LOGO */}
        <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16 xl:pt-20 2xl:pt-24"> <img src={logo} alt="The Bali Dream Villa" className=" h-[80px] sm:h-[90px] md:h-[110px] lg:h-[130px] xl:h-[150px] 2xl:h-[170px] object-contain " /> </div> </div>

      {/* Bottom Sheet */}
      <div
        className={`relative -mt-16 md:-mt-40 xl:-mt-70 2xl:-mt-80 z-10 rounded-t-[26px] bg-[rgba(18, 10, 4, 0.83)] backdrop-blur-xl border border-[rgba(255,240,210,0.12)] px-5 md:px-8 xl:px-14 2xl:px-16 pt-6 md:pt-10 xl:pt-14 2xl:pt-16 pb-7 md:pb-10 2xl:pb-4 flex flex-col gap-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
      >
         <ServicesSection visible={visible} />
        <PromotionsSection visible={visible} />
        <HeadOfficeSection visible={visible} />
        <FollowUsSection visible={visible} />

        <FooterCopyright ref={footerRef} visible={visible} />
      </div>
    </div>
  );
}
