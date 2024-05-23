import testimony from "../../../assets/testimony.png";
import quote from "../../../assets/quote.png";
const Testimonial = () => {
  return (
    <div className="px-[5rem] pb-[5rem]">
      <div className="flex justify-between items-center gap-[10rem]">
        <div>
          <img src={testimony} alt="" />
        </div>

        <div className="flex flex-col gap-[3rem] ">
          <div>
            <img src={quote} alt="" />
          </div>

          <p className="w-[80%] leading-9 text-[1.2rem]">
            CrimeSentry has made me feel more secure knowing that I have
            real-time information about what&apos;s happening in my
            neighborhood. - Sarah, Lagos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
