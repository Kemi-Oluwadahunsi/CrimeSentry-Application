import mobileVideo from "../../../assets/mobile-hero.mp4";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple.png";
const Hero = () => {
  return (
    <div className="px-[8rem] py-[5rem] flex justify-center items-center ">
      <div className=" flex justify-between gap-[5rem]">
        <div className="flex flex-col gap-[5rem] ">
          <div className="flex flex-col gap-[1rem]">
            <h2>WELCOME TO</h2>
            <h1 className="text-[4rem] font-bold font-[Inter]">
              <span className="text-[#7ED957]">Crime</span>
              <span className="text-[#FFDE59]">Sentry</span>
            </h1>
            <p className="text-2xl">A Real Time Crime Report App</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>
              <span className="text-[#7ED957]">STAY INFORMED,</span>
              <span className="text-[#FFDE59]"> STAY SAFE</span>
            </h2>
            <p className="w-[70%] text-lg leading-10">
              CrimeSentry is a cutting-edge community application designed to
              empower citizens with the ability to report crimes instantly and
              in realtime
            </p>
          </div>

          <div className="flex justify-between gap-8 w-[50%]">
            <img src={google} alt="" className="hover:scale-105" />
            <img src={apple} alt="" className="hover:scale-105" />
          </div>
        </div>

        <div className="basis-[60%] h-[52rem] videobg relative rounded-2xl">
          <div className="absolute top-[2rem]  left-9">
            <video
            src={mobileVideo}
            className="w-full h-[48rem] "
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          </div>
          
        </div>

        {/* <div className="">
          <img src={mobile} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
