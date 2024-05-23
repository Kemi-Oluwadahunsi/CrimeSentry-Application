import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { handleGoogleSignIn } from "./firebase";
// import { FcGoogle } from "react-icons/fc";
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "./firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const USER_REGEX = /^[a-zA-Z0-9_-][a-zA-Z0-9_\-\s]{3,}$/;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^\+?\d{1,3}?\d{10}$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

//   const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isMatchPwdVisible, setIsMatchPwdVisible] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const isValid = PHONE_REGEX.test(phoneNumber);
    setValidPhoneNumber(isValid);
  }, [phoneNumber]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const v1 = USER_REGEX.test(user);
//     const v2 = PWD_REGEX.test(password);
//     if (!v1 || !v2) {
//       setErrMsg("Invalid Entry");
//       return;
//     }
//     setSuccess(true);
//     toast.success("Registration Successfull");
//   };

//   const handleGoogleSignUP = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log(result);
//       toast.success("Sign-in successful");
//       setTimeout(() => {
//         navigate("/login");
//       }, 4000);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       setUser("");
//       setEmail("");
//       setPhoneNumber("");
//       setPassword("");
//       setMatchPwd("");

//       console.log("New user signed up:", user);
//       toast.success("Registration Successful");
//       setTimeout(() => {
//         navigate("/login");
//       }, 4000);
//       // updating more user fields
//       const userDetails = {
//         uid: user.uid, // Firebase Authentication UID
//         username: user.username,
//         email: user.email,
//         phoneNumber: phoneNumber,
//       };
//       await addDoc(collection(db, "users"), userDetails);
//     } catch (error) {
//       console.error("Error signing up:", error.message);
//     }
//   };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        {success ? (
          <section>
            <h1 className="text-white text-4xl">Success!</h1>
            <span className="text-white text-4xl pt-10">
              <Link to="/login">Sign In</Link>
            </span>
          </section>
        ) : (
          <div className="flex w-full md:w-[70%] lg:w-[70%] sm:p-6 lg:shadow-lg lg:shadow-teal-100 ">
            <div className="back w-full flex-1 rounded-tl-lg rounded-bl-lg items-center flex justify-center text-[4em] text-[#ECF4E5] font-bold">
              JOIN US
            </div>

            <section className="bg-gray-900 flex-1 justify-center rounded-tr-lg rounded-br-lg sm:rounded-tl-lg sm:rounded-bl-lg  ">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {" "}
                {errMsg}{" "}
              </p>

              <form
                className="w-full flex flex-col gap-1 mx-auto sm:px-4 lg:px-[15%] md:px-[9%] sm:py-[1em] md:py-[1em] lg:py-[2em]"
                // onSubmit={handleSubmit}
              >
                <h2 className=" sm:text-2xl md:text-3xl lg:text-4xl text-[#ECF4E5] font-bold text-center">
                  REGISTER
                </h2>

                {/* Username Input and VAlidation*/}
                <div className="flex flex-col text-gray-300">
                  <label
                    htmlFor="username"
                    className="sm:text-sm md:text-sm lg:text-base"
                  >
                    User-Name:
                    <span className={validName ? "valid" : "hide"}>
                      <FontAwesomeIcon className="ml-2" icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    id="username"
                    placeholder="Enter a username"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  ></input>
                </div>

                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon
                    className="ml-2 text-gray-300 text-xs"
                    icon={faInfoCircle}
                  />
                  <span className="ml-1 text-gray-300 text-xs">
                    4 to 24 characters.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </span>
                </p>

                {/* Email Input and validation */}
                <div className="flex flex-col text-gray-300">
                  <label
                    htmlFor="email"
                    className="sm:text-sm md:text-sm lg:text-base"
                  >
                    Email
                    <span className={validEmail ? "valid" : "hide"}>
                      <FontAwesomeIcon className="ml-2" icon={faCheck} />
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="text/number"
                    placeholder="grace.joel@xmail.com"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />

                  <p
                    id="emailnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon
                      className="ml-2 text-xs"
                      icon={faInfoCircle}
                    />
                    <span className="ml-1 text-xs">
                      Please enter a valid email address.
                    </span>
                  </p>
                </div>

                {/* Phonenumber input and validation */}
                <div className="flex flex-col text-gray-300">
                  <label
                    htmlFor="phone"
                    className="sm:text-sm md:text-sm lg:text-base"
                  >
                    Phone Number
                    <span className={validPhoneNumber ? "valid" : "hide"}>
                      <FontAwesomeIcon className="ml-2" icon={faCheck} />
                    </span>
                    <span
                      className={
                        validPhoneNumber || !phoneNumber ? "hide" : "invalid"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    aria-invalid={validPhoneNumber ? "false" : "true"}
                    aria-describedby="phonenote"
                    onFocus={() => setPhoneNumberFocus(true)}
                    onBlur={() => setPhoneNumberFocus(false)}
                  />
                  <p
                    id="phonenote"
                    className={
                      phoneNumberFocus && phoneNumber && !validPhoneNumber
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    Please enter a valid phone number (10 digits).
                  </p>
                </div>

                {/* Password Input and validation */}
                <div className="flex flex-col text-gray-300">
                  <label
                    htmlFor="password"
                    className="sm:text-sm md:text-sm lg:text-base"
                  >
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>
                      <FontAwesomeIcon className="ml-2" icon={faCheck} />
                    </span>
                    <span
                      className={validPwd || !password ? "hide" : "invalid"}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>

                  <div className="relative">
                    <input
                      className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full"
                      type={isPwdVisible ? "text" : "password"}
                      id="password"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    ></input>

                    <div
                      className=" absolute top-4 left-[90%] z-20"
                      onClick={() =>
                        setIsPwdVisible((prevIsVisible) => !prevIsVisible)
                      }
                    >
                      {isPwdVisible ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          color="#A6A6A6"
                          className="text-sm"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          color="#A6A6A6"
                          className="text-sm"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon
                    className="text-gray-300 text-xs ml-2"
                    icon={faInfoCircle}
                  />
                  <span className="ml-1 text-gray-300 text-xs">
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character. <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </span>
                </p>

                {/* Confirm password input and validation */}
                <div className="flex flex-col text-gray-300 py-2 w-full">
                  <label
                    htmlFor="confirm_pwd"
                    className="sm:text-sm md:text-sm lg:text-base"
                  >
                    Confirm Password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                      <FontAwesomeIcon className="ml-2" icon={faCheck} />
                    </span>
                    <span
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>

                  <div className="relative w-full">
                    <input
                      className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full"
                      type={isMatchPwdVisible ? "text" : "password"}
                      id="confirm_pwd"
                      placeholder="********"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    ></input>

                    <div
                      className=" absolute top-4 left-[90%] z-20"
                      onClick={() =>
                        setIsMatchPwdVisible((prevIsVisible) => !prevIsVisible)
                      }
                    >
                      {isMatchPwdVisible ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          color="#A6A6A6"
                          className="text-sm"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          color="#A6A6A6"
                          className="text-sm"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon
                    className="text-gray-300 text-xs"
                    icon={faInfoCircle}
                  />
                  <span className="ml-1">
                    {" "}
                    Must match the first password input field.
                  </span>
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    className="w-full mt-2 py-2 cursor-pointer bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                    disabled={
                      !validName || !validPwd || !validMatch ? true : false
                    }
                    // onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                  <span className="text-gray-300  grid place-content-center">
                    or
                  </span>
                  <button
                    // onClick={handleGoogleSignUP}
                    className=" flex justify-center gap-3 w-full py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                  >
                    {" "}
                    <FcGoogle className="text-2xl" /> Sign Up with Google
                  </button>
                  <p className="text-gray-300 flex justify-center gap-1 items-center w-full sm:text-sm">
                    Already have an Account?
                    <Link to="/login">
                      <span className=" hover:text-teal-600 font-bold text-lg underline decoration-teal-600 underline-offset-8 decoration-4 sm:text-sm">
                        Sign In
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </section>
          </div>
        )}
        {/* <div className="z-[10000]">
          <ToastContainer position="top-right" autoClose={5000} />
        </div> */}
      </div>
    </>
  );
};

export default SignUp;
