import group from "../../../assets/group.png"
const Howitworks = () => {
  return (
    <div className=" flex justify-between items-center px-[5rem] py-[5rem]">
      <div className=" flex justify-between gap-[5rem]">
        <div className="h-[80%]">
          <img src={group} alt="" className="h-[80%]"/>
        </div>

        <div className=" flex flex-col gap-[3rem]">
          <h2 className="font-bold text-[2rem]">How It Works</h2>

          <div className="flex flex-col gap-[3rem] text-lg">
            <p>
              1. Download the App: Available on both iOS and Android platforms.
            </p>

            <p>
              2. Create an Account: Sign up with your email or social media
              profiles.
            </p>

            <p>
              3. Set Your Preferences: Customize your alert settings based on
              your location and preferred alert types.
            </p>

            <p>
              4. Stay Alert and Report: Receive notifications, report incidents,
              and stay connected with your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks