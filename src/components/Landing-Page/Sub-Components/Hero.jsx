import mobile from "../../../assets/mobile-hero.png";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple.png";
const Hero = () => {
  return (
    <div className="px-[8rem] pt-[5rem] flex justify-center items-center ">
      <div className=" flex justify-between gap-[5rem]">
        <div className="flex flex-col gap-[5rem] ">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-[4rem] font-bold font-[Inter]">
              <span className="text-[#7ED957]">Crime</span>
              <span className="text-[#FFDE59]">Sentry</span>
            </h1>
            <p className="text-2xl">A Real Time Crime Report App</p>
          </div>

          <p className="w-[50%] text-lg leading-10">
            CrimeSentry is a cutting-edge community application designed to
            empower citizens with the ability to report crimes instantly and in
            realtime
          </p>

          <div className="flex justify-between gap-8 w-[50%]">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>

        <div>
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
