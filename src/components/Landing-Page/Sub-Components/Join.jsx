import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="pb-[5rem] flex items-center justify-center  ">
      <div className="sectionjoin w-full flex flex-col gap-[2rem] items-center justify-center">
        <h2 className="text-[3rem] font-[Inter] text-center mx-auto">
          Join The
          <span className="text-[#7ED957]"> Crime</span>
          <span className="text-[#FFDE59]">Sentry </span>
          Community
        </h2>

        <Link to={"/signup"}><button className="bg-[#7ED957] py-3 px-8 text-[1.5rem] font-bold rounded-lg hover:scale-105">
          JOIN NOW
        </button></Link>
      </div>
    </div>
  );
};

export default Join;
