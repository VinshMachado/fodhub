import React from "react";

const index = () => {
  return (
    <div className="h-full w-full flex justify-center align-middle">
      <div className=" flex flex-col bg-gray-500 rounded-lg  items-center justify-center my-52 h-[25rem] w-[39rem] shadow-2xl ">
        <b>
          <h1 className="text-xl">LOGIN</h1>
        </b>
        <input
          type="email"
          placeholder="Email"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2 m-1 flex-col w-96 h-10 rounded-lg hover:border-gray-50"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2  m-1 flex-col w-96 h-10 rounded-lg  hover:border-gray-50"
        ></input>
        <div className="flex ">
          <input type="checkbox" placeholder="Password"></input>{" "}
          <label className="mx-1 ">show password</label>{" "}
          <a href="www.youtube.com" className="text-blue-500 pl-32">
            {" "}
            forgot password?
          </a>
        </div>
        <button className="bg-blue-500 w-96 h-10 rounded-lg my-1 font-bold text-white hover:bg-blue-400">
          LOGIN
        </button>
        <h2>
          dont have an account?
          <a href="www.youtube.com" className="text-blue-50">
            {" "}
            sign up
          </a>
        </h2>
      </div>
    </div>
  );
};

export default index;
