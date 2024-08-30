import React, { ChangeEvent, useState } from "react";
import Router, { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  //make hide or show pass//
  const [show, setshow] = useState(false);
  const changeshow = () => {
    setshow(!show);
  };

  //set pass and gmail////
  const [pass, setpass] = useState("");
  const [gmail, setgmail] = useState("");

  const handelchange = (event: ChangeEvent<HTMLInputElement>) => {
    setpass(event.target.value);
  };
  const gmailchange = (event: ChangeEvent<HTMLInputElement>) => {
    setgmail(event.target.value);
  };

  const user = {
    usernameOrEmail: "",
    password: "",
  };

  //sending data to backend //
  const Senddata = async () => {
    const responce = await fetch(
      `http://localhost:5000/login?usernameOrEmail=${user.usernameOrEmail}&password=${user.password}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await responce.json();
    if (data.success == false) {
      alert("ckeck your password and username");
    } else {
      router.push("/");
    }
    console.log(data);
  };
  //accepting details//
  const logindetail = async () => {
    user.usernameOrEmail = gmail;
    user.password = pass;
    console.log(user);
    Senddata();
  };

  return (
    <div className="h-screen w-full bg-[url('/loginBg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center p-4 sm:p-0 bg-opacity-100">
      <div className="flex flex-col bg-zinc-500 rounded-lg items-center justify-center h-2/3 shadow-[#312f2f] shadow-xl w-full sm:w-auto p-6 ">
        <b>
          <h1 className="text-2xl font-serif text-center text-white">Login</h1>
        </b>
        <div className="py-2">
          <input
            id="gmailfield"
            onChange={gmailchange}
            type="email"
            placeholder="Email"
            className="border-gray-600 placeholder:text-gray-600 pl-3 border-2 m-1 h-10 rounded-lg hover:border-gray-50 w-72 sm:w-96 max-w-md"
          />
        </div>
        <input
          onChange={handelchange}
          type={show ? "text" : "password"}
          placeholder="Password"
          className="border-gray-600 placeholder:text-gray-600 pl-3 border-2 m-1 h-10 rounded-lg hover:border-gray-50 w-72 sm:w-96 max-w-md "
        />
        <div className="flex-row flex-col justify-evenly sm:flex-row items-center">
          <input type="checkbox" onClick={changeshow} className="mr-2" />
          <label className="mr-5 sm:mr-24 text-white">Show Password</label>
          <a
            href="https://www.youtube.com"
            className="text-blue-800 mt-2 sm:mt-0 sm:ml-4"
          >
            Forgot Password?
          </a>
        </div>
        <button
          className="bg-blue-500 w-72 sm:w-96 max-w-md h-10 rounded-lg my-2 font-bold text-white hover:bg-blue-400 text-lg"
          onClick={logindetail}
        >
          Login
        </button>
        <h2 className="text-center text-white">
          Don’t have an account?
          <a href="https://www.youtube.com" className="text-blue-800">
            {" "}
            Sign up
          </a>
        </h2>
        <h3 className="text-gray-300 text-center">Or</h3>
        <div className="flex flex-col items-center">
          <button className="flex justify-center items-center my-3 h-10 w-72 sm:w-96 max-w-md font-bold text-base bg-white border border-white rounded-lg shadow-md px-4 py-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      fill="#EB4335"
                    />
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      fill="#34A853"
                    />
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      fill="#4285F4"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="text-sm">Sign in with Google</span>
          </button>
          <button className="flex items-center justify-center my-3 h-10 w-72 sm:w-96 max-w-md font-bold text-base bg-white border border-white rounded-lg shadow-md px-4 py-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Color-"
                  transform="translate(-200.000000, -160.000000)"
                  fill="#4460A0"
                >
                  <path
                    d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                    id="Facebook"
                  ></path>
                </g>
              </g>
            </svg>
            <span className="text-sm">Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
