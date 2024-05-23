import bell from "../../../assets/bell.png";
import jotter from "../../../assets/jotter.png";
import safety from "../../../assets/safety.png";
import location from "../../../assets/location.png";
import integer from "../../../assets/integer.png";
const WhyCrimeSentry = () => {
  return (
    <div className="px-[5rem] pb-[5rem] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[3rem]">
        <h2 className="text-[3rem]">why CrimeSentry?</h2>

        <div className="flex justify-around items-center px-[5rem] gap-[3rem] flex-wrap">
          <div className="flex flex-col gap-4 basis-[30%] border border-white px-4 py-8 rounded-lg shadow-[0_0_5px_2px_rgb(250,250,250)]">
            <div className="flex gap-4 items-center">
              <div className="basis-[10%]">
                <img src={bell} alt="" className="w-[80%]" />
              </div>

              <h2 className="text-2xl font-bold font-[Inter]">
                Real-Time Alerts
              </h2>
            </div>

            <p className="">
              Receive instant notifications about crimes happening in your
              vicinity. Stay ahead and make informed decisions to ensure your
              safety.
            </p>
          </div>

          <div className="flex flex-col gap-4 basis-[30%] border border-white px-4 py-8 rounded-lg shadow-[0_0_5px_2px_rgb(250,250,250)]">
            <div className="flex gap-4 items-center">
              <div className="basis-[10%]">
                <img src={jotter} alt="" className="w-[80%]" />
              </div>

              <h2 className="text-2xl font-bold font-[Inter]">
                Community Reporting
              </h2>
            </div>

            <p className="">
              Empower yourself and your neighbors by reporting suspicious
              activities. Together, we can create a safer environment for
              everyone.
            </p>
          </div>

          <div className="flex flex-col gap-4 basis-[30%] border border-white px-4 py-8 rounded-lg shadow-[0_0_5px_2px_rgb(250,250,250)]">
            <div className="flex gap-4 items-center">
              <div className="basis-[10%]">
                <img src={safety} alt="" className="w-[80%]" />
              </div>

              <h2 className="text-2xl font-bold font-[Inter]">Safety Tips</h2>
            </div>

            <p className="">
              Access expert advice and practical tips on how to protect yourself
              and your property. Be proactive about your safety with our
              comprehensive resources.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 basis-[30%] border border-white px-4 py-8 rounded-lg shadow-[0_0_5px_2px_rgb(250,250,250)]">
            <div className="flex gap-2 items-center">
              <div className="basis-[10%]">
                <img src={location} alt="" className="w-[80%]" />
              </div>

              <h2 className="text-2xl font-bold font-[Inter]">
                Interactive Crime Maps
              </h2>
            </div>

            <p className="">
              Visualize crime hotspots and trends in your area with our detailed
              and user-friendly crime maps. Stay aware of high-risk zones and
              plan your routes accordingly.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 basis-[30%] border border-white px-4 py-8 rounded-lg shadow-[0_0_5px_2px_rgb(250,250,250)]">
            <div className="flex gap-2 items-center">
              <div className="basis-[20%]">
                <img src={integer} alt="" className="w-[90%]" />
              </div>

              <h2 className="text-2xl font-bold font-[Inter]">
                Seamless Integration with Local Authorities
              </h2>
            </div>

            <p className="">
              Our app collaborates with local law enforcement to provide you
              with verified information and quick response options in case of
              emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCrimeSentry;
