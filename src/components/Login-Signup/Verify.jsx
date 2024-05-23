import verify from "../../assets/verify.png";
import google from "../../assets/flat-color-icons_google.png";
import apple from "../../assets/ant-design_apple-filled.png";
import facebook from "../../assets/facebookIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  return (
    <section className=" pt-[4rem] flex justify-around h-screen">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back to sign inin</p>
        </div>

        <h2 className="text-[2.5rem] font-[600]">Verify Code</h2>
        <h5 className="text-[1rem] font-[400]">
          An authentication 
        </h5>
        <div className="mt-[1.5rem] relative">
          <label
            htmlFor="email"
            className="ml-3 text-[1rem] text-[black] font-[600] w-[3rem] bg-[white] 
             border-0 absolute top-[-0.8rem] text-center "
          >
            Email
          </label>
          <input
            type="text"
            placeholder="john.doe@gmail.com"
            className="p-2 w-[25rem] rounded-sm outline-none text-[black]  "
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="p-2 w-[25rem] cursor-pointer rounded-sm outline-none text-[white] bg-[#7ED957] font-[600] hover:bg-[#519135]"
        />

        <div className="relative">
          <hr className="bg-[gray]" />
          <p className="absolute text-[gray] p-2 -top-[1.3rem] left-[9rem] border-none bg-[black]">
            Or sign in with
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <img
            src={facebook}
            alt="facebook-icon"
            className="border px-10 py-3 rounded-md border-[#7ED957]"
          />

          <img
            src={google}
            alt="facebook-icon"
            className="border px-10 py-3 rounded-md border-[#7ED957]"
          />

          <img
            src={apple}
            alt="facebook-icon"
            className="border px-10 py-3 rounded-md border-[#7ED957]"
          />
        </div>
      </div>
      <div>
        <img
          src={verify}
          alt="phone-image"
          className="hidden max-w-[30rem] md:block "
        />
      </div>
    </section>
  );
}
