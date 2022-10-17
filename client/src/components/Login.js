import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2">
        <img
        className="h-screen w-full"
          src="https://github.com/Elvis-Munene/Abojani-Academy-web-app/blob/main-page/assets/images/main-image-signup.png?raw=true"
          alt=""
        />
      </div>
      <div className="pl-44" style={{ width: "498px" }}>
        <h3 className="mt-20 mb-8">
          <span
            style={{
              color: "rgb(109, 199, 122)",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "37px",
            }}
          >
            Abojani
          </span>{" "}
          <span
            style={{
              color: "rgb(241, 116, 37)",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "37px",
            }}
          >
            Academy
          </span>
        </h3>
        <div
          className="w-80 h-96 rounded-lg text-center"
          style={{ backgroundColor: "rgb(109, 199, 122)" }}
        >
          <form type="submit" onSubmit={handleSubmit} className="">
            {errors.map((err) => (
              <p className="text-red-700 text-xl" key={err}>
                {err}
              </p>
            ))}
            <input
              style={{
                border: "1px solid rgb(241, 116, 37)",
                boxShadow: "0px 4px 7px 1px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
              }}
              className="mx-auto w-64 h-12 mt-20 mb-8 px-4 outline-none"
              type="text"
              placeholder="Full Name"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              style={{
                border: "1px solid rgb(241, 116, 37)",
                boxShadow: "0px 4px 7px 1px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
              }}
              className="mx-auto w-64 h-12 mb-6 px-4 outline-none"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="submit"
              className="mx-auto w-64 h-12 rounded-lg text-white mb-6"
              style={{ backgroundColor: "rgb(241, 116, 37)" }}
            >
              {isLoading ? "Loading..." : "Log in"}
            </button>
          </form>
          <p className="text-white text-xl">
            Need an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;