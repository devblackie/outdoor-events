import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState()
  const userToDB = { username, password, passwordConfirmation };
  

  const errormessage = error?.map((error) => {
    return (
      <>
        <li className="text-danger pt-3">{error}</li>
      </>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToDB),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setSuccess((user.success)));
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
      } else {
        r.json().then((error) => setError((error.errors)));
      }
    });
  }
  return (
    <div>
      <section className=" ">
        <h3 style={{ fontWeight: "400", color: "#0D7CAC" }} className="text-center">CREATE AN ACCOUNT TO POST AN EVENT </h3>
        <div className=" ">
          <div className=" ">
            <div className=" ">
              <img src=" " className="img-fluid" alt="Sample" />
            </div>
            <div className=" ">
              <div className=" ">
                <p className=" ">HAVE AN ACCOUNT{" "}
                  <span>
                    <Link style={colorTxt} to="/login">LOGIN</Link>
                  </span>
                </p>
              </div>

              <form>
                <div className=" ">
                  <input onChange={(e) => setUsername(e.target.value)} type="text" id="form3Example3" value={username} className=" " placeholder="username" />
                </div>

                <div className=" ">
                  <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} id="form3Example4" className=" " placeholder="password" />
                </div>

                <div className=" ">
                  <input type="password" id="form3Example4" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className=" " placeholder="confirm password" />
                </div>
                <div className="text-center text-lg-start">
                <p className="text-success">{success}</p>
                  <button onClick={handleSubmit} type="button" className=" " >Sign Up</button>
                  <ol>{errormessage}</ol>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}