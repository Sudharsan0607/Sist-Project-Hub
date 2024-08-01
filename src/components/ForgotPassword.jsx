import bgImage from "../assets/bg_sathyabama.png";
import logo from "../assets/sathyabama_logo.jpg";

import { getFormData } from "../hooks/getFormData";

const ForgotPassword = () => {
  const handleChangePassword = (eve) => {
    eve.preventDefault();
    const { isEmpty, data } = getFormData(eve.currentTarget);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[100vh] w-[100vw] bg-center bg-cover bg-no-repeat flex justify-center items-center"
    >
      <form
        onSubmit={handleChangePassword}
        className="container mx-3 w-fit h-fit p-10 backdrop-brightness-125 bg-black/55 flex flex-col items-center justify-items-start gap-8 rounded"
      >
        <a href="https://www.sathyabama.ac.in/" target="_blank">
          <img
            src={logo}
            alt="sathyabama_logo"
            className="h-[8vh] w-[60vw] md:w-[18vw]"
          />
        </a>
        <span className=" w-[72vw] md:w-[24vw]  h-[6vh] text-gray-100 font-bold bg-[#831238] bg-opacity-90 flex justify-center items-center rounded">
          Change Password
        </span>
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
          placeholder="Password"
          className=" w-[72vw] md:w-[24vw]  h-[6vh] text-gray-700 py-2 font-bold rounded backdrop-brightness-125 px-4 focus:outline-none"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
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
      </form>
    </div>
  );
};
export default ForgotPassword;
