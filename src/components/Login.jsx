import { Link } from "react-router-dom";

import bgImage from "../assets/bg_sathyabama.png";
import logo from "../assets/sathyabama_logo.jpg";

import { getFormData } from "../hooks/getFormData.jsx";

const Login = () => {
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
        className="container mx-3 w-fit h-fit p-10 backdrop-brightness-125 bg-black/55 flex flex-col items-center justify-items-start gap-8 rounded"
      >
        <a href="https://www.sathyabama.ac.in/" target="_blank">
          <img
            src={logo}
            alt="sathyabama_logo"
            className="h-[8vh] w-[60vw] md:w-[18vw]"
          />
        </a>
        <select
          name="user"
          className=" w-[72vw] md:w-[24vw] h-[6vh] text-gray-700 py-2 font-bold rounded backdrop-brightness-125 px-4 focus:outline-none"
          required
        >
          {/* <option value="newUser ">New User</option> */}
          <option value="projects">Projects</option>
          <option value="facultyIncharge">Faculty Incharge</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="text"
          name="id"
          placeholder="Email / Project Id"
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
        <div className=" w-[72vw] md:w-[24vw] flex flex-col gap-3 md:gap-0 md:flex-row md:justify-around ">
          <span className="text-white font-bold mx-auto">
            New Project &nbsp;
            <Link
              to="/register"
              className="text-blue-400 underline font-normal"
            >
              register?
            </Link>
          </span>
          <Link
            to="/forgot_password"
            className="text-blue-400 underline mx-auto"
          >
            forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
