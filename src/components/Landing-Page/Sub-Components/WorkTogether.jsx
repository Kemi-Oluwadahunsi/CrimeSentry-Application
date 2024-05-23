import ark from "../../../assets/ark.png";
import cres from "../../../assets/cres.png";
import line from "../../../assets/line.png";
const WorkTogether = () => {
  return (
    <div className="rounded-[3rem] relative bg-[#25262A] h-fit">
      <div className="flex flex-col">
        <div className="">
          <img src={ark} alt="" className="w-[8%] rounded-tl-[3rem]" />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-[2rem] items-center justify-center">
            <div>
              <img src={line} alt="" />
            </div>
            <div className=" flex flex-col items-center justify-center text-center gap-[4rem]">
              <div className="w-[60%] flex flex-col gap-8 ">
                <h2 className="font-bold text-[2rem]">Lets Work Together</h2>
                <p className="text-center">
                  At CrimeSentry, safety is a team effort. Report suspicious
                  activity, share safety tips, and stay informed with real-time
                  alerts. Collaborate with local authorities and encourage
                  others to join our safety network. Together, we can create
                  safer, stronger neighborhoods. Download CrimeSentry today and
                  be part of the change.
                </p>
              </div>

              <button className="bg-[#7ED957] py-3 px-8 text-[1.5rem] font-bold rounded-lg hover:scale-105">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={cres} alt="" className="w-[8%] " />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
