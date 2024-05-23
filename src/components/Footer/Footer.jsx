import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import fb from "../../assets/fb.png";
import inst from "../../assets/inst.png";
import x from "../../assets/x.png";
import whatsap from "../../assets/whatsap.png";
import logo from "/logo.png";
const Footer = () => {
  return (
    <div className="px-[2rem] pt-[5rem] pb-8">
      <div className="flex justify-between basis-[10%]">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col gap-[4rem] basis-[20%]">
          <h2 className="text-lg">Download Now</h2>
          <div className="flex justify-between gap-8 w-[40%]">
            <img src={google} alt="" className="hover:scale-105" />
            <img src={apple} alt="" className="hover:scale-105" />
          </div>
        </div>

        <div className="flex flex-col gap-[4rem] basis-[30%]">
          <h2 className="text-lg">Contact Us</h2>

          <div className="flex flex-col gap-[2rem]">
            <p>
              Have questions or need support? Reach out to our customer service
              team.
            </p>

            <div className="flex flex-col gap-2">
              <p>Email: support@CrimeSentry.com</p>
              <p>Phone: +234 800 123 4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  gap-[2rem] basis-[30%]">
          <div className="flex flex-col gap-[4rem]">
            <h2>Stay Connected</h2>
            <p>
              Follow us on social media for the latest updates, news, and safety
              tips.
            </p>
          </div>

          <div className="flex justify-between w-[60%]">
            <a href="https://www.facebook.com/" className="hover:scale-105">
              <img src={fb} alt="" />
            </a>
            <a href="https://www.instagram.com/" className="hover:scale-105">
              <img src={inst} alt="" />
            </a>
            <a href="https://www.x.com/" className="hover:scale-105">
              <img src={x} alt="" />
            </a>
            <a href="https://www.whatsapp.com/" className="hover:scale-105">
              <img src={whatsap} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
