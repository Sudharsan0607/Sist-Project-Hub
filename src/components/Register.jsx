import { Link } from "react-router-dom";

import bgImage from "../assets/bg_sathyabama.png";
import logo from "../assets/sathyabama_logo.jpg";
import { getFormData } from "../hooks/getFormData";

const Register = () => {
  const loginData = (eve) => {
    eve.preventDefault();
    const { isEmpty, data } = getFormData(eve.currentTarget);
    // console.log(isEmpty);
    // console.log(data);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[100vh] w-[100vw] bg-center bg-cover bg-no-repeat flex justify-center items-center"
    >
      <form
        onSubmit={loginData}
        className="container w-fit h-fit p-10 backdrop-brightness-125 bg-black/50 flex flex-col items-center justify-items-start gap-8 rounded"
      >
        <a href="https://www.sathyabama.ac.in/" target="_blank">
          <img
            src={logo}
            alt="sathyabama_logo"
            className="h-[8vh] w-[60vw] md:w-[18vw]"
          />
        </a>
        <span className=" w-[72vw] md:w-[24vw]  h-[6vh] text-gray-100 font-bold bg-[#831238] bg-opacity-90 flex justify-center items-center rounded">
          New Project Registration
        </span>
        <input type="text" name="user" defaultValue="newProject" hidden />
        <input
          type="email"
          name="id"
          placeholder="Email"
          className=" w-[72vw] md:w-[24vw]  h-[6vh] text-gray-700 py-2 font-bold rounded backdrop-brightness-125 px-4 focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className=" w-[72vw] md:w-[24vw]  h-[6vh] text-gray-700 py-2 font-bold rounded backdrop-brightness-125 px-4 focus:outline-none"
          required
        />
        <button
          type="submit"
          cursor="pointer"
          className=" w-[72vw] md:w-[24vw]  h-[6vh] rounded bg-[#EC7824] text-white font-semibold"
        >
          Submit
        </button>
        <span className="text-white font-bold">
          Already registered &nbsp;
          <Link to="/" className="text-blue-400 underline font-normal">
            login?
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
