import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const colorTxt = {
    color: "#0D7CAC",
    textDecoration: "none",
  };

  const errormessage = error?.map((error) => {
    return (
      <>
        <p className="text-danger pt-3">{error}</p>
      </>
    );
  });


  const loginDetails = { username, password };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((error) => setError(Object.values(error)));
      }
    });
  }
  return (
    <div>
        <div className="">
          <div className=" ">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src=" " className="img-fluid" alt="Sample" />
            </div>
            <div className=" ">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className=" ">REGISTER{" "}
                    <span>
                      <Link to="/signup">SIGN UP</Link>
                    </span>
                  </p>
                </div>

           

                <div className=" ">
                  <input type="text" id="form3Example3" className=" " placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className=" ">
                  <input type="password" id="form3Example4" className="" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="">
                  <button onClick={handleSubmit} type="button" className=" ">Login</button>
                  {errormessage}
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}