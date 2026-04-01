import InfoIconCircle from "../InfoIconCircle";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

export default function HeadOfficeSection({ labelStyle, visible }) {
  return (
    <section className={`bali-up d4 ${visible ? "on" : ""} border-t border-[rgba(255,240,210,0.08)] pt-[32px]`}>
      <p className="label-jost">Head Office</p>
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center gap-[12px]">
          <InfoIconCircle>
            <MailIcon />
          </InfoIconCircle>
          <p className="ho-contact break-words">info@thebalidreamvilla.com</p>
        </div>

        <div className="flex items-center gap-[12px]">
          <InfoIconCircle>
            <PhoneIcon />
          </InfoIconCircle>
          <div>
            <p className="ho-contact">+62 361 737788</p>
            <p className="ho-contact">+62 878 0651 4620</p>
          </div>
        </div>
      </div>
    </section>
  );
}
