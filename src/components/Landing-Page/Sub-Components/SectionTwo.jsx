import house from "../../../assets/house.png"
const SectionTwo = () => {
  return (
    <div className="pb-[5rem] flex items-center justify-center flex-col gap-[2rem]">
      <div>
        <h2 className="text-[2rem] font-[Inter] text-center mx-auto">
          Your World Is <br /> Safer With
          <span className="text-[#7ED957]"> Crime</span>
          <span className="text-[#FFDE59]">Sentry</span>
        </h2>
      </div>

      <div>
        <img src={house} alt="house" className="w-[70%] mx-auto" />
      </div>

      <div className="flex justify-between px-[7rem] w-[85%]">
        <div className="flex flex-col gap-4 basis-[30%]">
          <h2 className="text-2xl font-bold font-[Inter]">
            Report A Crim At Instance
          </h2>
          <p className="text-sm">
            Crime reporting made easier. Report crimes as it is happening.
          </p>
        </div>

        <div className="flex flex-col gap-4 basis-[30%]">
          <h2 className="text-2xl font-bold font-[Inter]">
            Know what’s happening so you and your loved ones can stay safe.
          </h2>
          <p className="text-sm">
            Connect with your family, friends, and neighbors on Citizen and find
            out when something important is happening around them.
          </p>
        </div>

        <div className="flex flex-col gap-4 basis-[30%]">
          <h2 className="text-2xl font-bold font-[Inter]">
            Always know what’s going on in your community .
          </h2>
          <p className="text-sm">
            If there’s commotion like police activity, riot, unnecessary
            disturbance, or road closures, pull up the app and know why
            instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
