import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();

  //make hide or show pass//
  const [show, setshow] = useState(false);
  const changeshow = () => {
    setshow(!show);
  };

  //set pass and gmail////
  const [pass, setpass] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [gmail, setgmail] = useState("");
  const [username, setuser] = useState("");

  const handelchange = (event: ChangeEvent<HTMLInputElement>) => {
    setpass(event.target.value);
  };
  const gmailchange = (event: ChangeEvent<HTMLInputElement>) => {
    setgmail(event.target.value);
  };
  const userchange = (event: ChangeEvent<HTMLInputElement>) => {
    setuser(event.target.value);
  };

  const getconfirmpass = (event: ChangeEvent<HTMLInputElement>) => {
    setconfirmpass(event.target.value);
  };

  //user object//
  const user = {
    gmail: "",
    password: "",
    confirmpass: "",
    username: "",
  };

  //post thing//
  const sendlogin = async () => {
    let responce = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: gmail,
        password: pass,
      }),
    });
    const data = await responce.json();
    if (responce.ok) {
      console.log(data);
    } else {
      console.log("data not sent");
    }
  };
  //getting details//
  const logindetail = () => {
    user.gmail = gmail;
    user.password = pass;
    user.confirmpass = confirmpass;
    user.username = username;
    if (user.password == user.confirmpass && user.gmail != "") {
      console.log(user);
      sendlogin();
    } else if (user.gmail == "") {
      alert("please enter gmail");
    } else {
      alert("password  and confirm password are not same ");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center  bg-slate-900 items-center">
      <div className=" flex flex-col bg-gray-500 rounded-lg  items-center justify-center  h-4/5 w-auto shadow-[#312f2f] shadow-xl ">
        <b>
          <h1 className="text-xl font-serif">Signup</h1>
        </b>
        <input
          id="gmailfield"
          onChange={userchange}
          type="email"
          placeholder="Username"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2 m-1 flex-col w-96 h-10 rounded-lg hover:border-gray-50"
        ></input>

        <input
          id="gmailfield"
          onChange={gmailchange}
          type="email"
          placeholder="Email"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2 m-1 flex-col w-96 h-10 rounded-lg hover:border-gray-50"
        ></input>
        <input
          onChange={handelchange}
          type={show ? "type" : "password"}
          placeholder="Create Password"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2  m-1 flex-col w-96 h-10 rounded-lg  hover:border-gray-50"
        ></input>
        <input
          onChange={getconfirmpass}
          type={show ? "type" : "password"}
          placeholder="Confirm Password"
          className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2  m-1 flex-col w-96 h-10 rounded-lg  hover:border-gray-50"
        ></input>
        <div className="flex pr-60">
          <input type="checkbox" onClick={changeshow}></input>{" "}
          <label className="mx-1 ">Show Password</label>{" "}
        </div>
        <button
          className="bg-blue-500 w-96 h-10 rounded-lg my-1 font-bold text-white hover:bg-blue-400"
          onClick={logindetail}
        >
          Signup
        </button>
        <h2>
          Already have an account?
          <a href="www.youtube.com" className="text-sky-500">
            {" "}
            Login
          </a>
        </h2>
        <h3 className="text-gray-300">Or</h3>
        <div className="flex items-center justify-center">
          <button className="flex items-center bg-white border rounded-lg font-bold text-base hover:border-black border-white shadow-md px-6 py-2 h-10 w-[23.6rem] dark:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-6 m-[5rem] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              {" "}
              <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {" "}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {" "}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
            <span>Login with Google</span>
          </button>
        </div>
        <button className="flex items-center my-3 h-10 w-[23.6rem] font-bold text-base bg-white border border-white rounded-lg shadow-md px-[89px] py-2  hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 48 48"
            version="1.1"
          >
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
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

          <span>Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default signup;
