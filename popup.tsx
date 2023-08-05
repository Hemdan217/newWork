import { Storage } from "@plasmohq/storage";
import { useStorage } from "@plasmohq/storage/hook";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "data-base64:~assets/icon.png";

function IndexPopup() {
  const storage = new Storage();

  const [token, setToken] = useStorage("token");
  const [auth, setAuth] = useStorage("auth");
  const clientId = useRef(null);
  const key = useRef(null);
  const [main, setMain] = useState("org");
  const [enterEmail, setEnterEmail] = useState(false);
  const [enterEmailInd, setEnterEmailInd] = useState(false);

  useEffect(() => {
    // if (token) {
    //   const jwtString = Buffer.from(token, "base64").toString();
    //   const regex = /"exp":\s*(\d+)/;
    //   const match = jwtString.match(regex);

    //   if (match) {
    //     const exp = parseInt(match[1]);
    //     console.log(exp);
    //     console.log(`Expiration time: ${new Date(exp * 1000)}`);
    //     if (Date.now() / 1000 < exp) {
    //       setAuth(true);
    //     } else {
    axios
      .post("http://178.170.48.29:5000/authenticate", {
        clientId: "YjY1YTFiODQtMjVlOC00N2FmLWFmMWYtZjUxZjA0MjMwZjYx",
        key: "ZjgxZTc3OTktN2MyNy00ZjEyLWFkNzQtNDVjNzc0OTQxN2I1",
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        setToken(res.data.access_token);
        setAuth(true);
        start(res.data.access_token);
      });
    //   }
    // } else {
    //   axios
    //     .post("http://178.170.48.29:5000/authenticate", {
    //       clientId: "YjY1YTFiODQtMjVlOC00N2FmLWFmMWYtZjUxZjA0MjMwZjYx",
    //       key: "ZjgxZTc3OTktN2MyNy00ZjEyLWFkNzQtNDVjNzc0OTQxN2I1",
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //       console.log(res.data);
    //       setToken(res.data.access_token);
    //       setAuth(true);
    //       start(res.data.access_token);
    //     });
    // }
    // }
  }, []);
  // useEffect(() => {
  //   if (auth) {
  //     start(token);
  //   }
  // }, [auth]);

  async function start(token) {
    await chrome.runtime.sendMessage({
      action: "start",
      payload: token,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://178.170.48.29:5000/authenticate", {
      clientId: clientId?.current?.value,
      key: key?.current?.value,
    });
    console.log(res.data);
    setToken(res.data.access_token);
    setAuth(true);
  };
  return (
    <div
      className="card text-center"
      style={{ width: "425px", border: "2px solid #A8C4EA" }}
    >
      <div
        className="card-header mb-0 pb-0 px-0"
        style={{ backgroundColor: "#DBE8FD" }}
      >
        <div className="d-flex justify-content-evenly align-items-center px-5 py-3">
          <img src={logo} className="w-[25px] " />
          <h5
            className="p-0 m-0"
            style={{ color: "#013157", fontWeight: "bold" }}
          >
            Extension Activation
          </h5>
        </div>
        <div className="text-center  m-auto  flex justify-evenly w-full m-0 p-0">
          <div
            onClick={() => setMain("org")}
            style={{ backgroundColor: main == "ind" ? "white" : "#A8C4EA" }}
            className="cursor-pointer w-full px-5 py-2 fw-bold"
          >
            Organization
          </div>
          <div
            onClick={() => setMain("ind")}
            style={{ backgroundColor: main == "ind" ? "#A8C4EA" : "white" }}
            className="cursor-pointer w-full px-5 py-2 fw-bold"
          >
            Individual
          </div>
        </div>
      </div>
      <div className="card-body">
        {main == "ind" ? (
          <>
            <div className="text-start p-2">
              {!enterEmailInd ? (
                <>
                  {" "}
                  <div>
                    <label htmlFor="email" className=" fw-bold mb-2">
                      Enter your registered email address
                    </label>
                    <div className="text-center  flex justify-between mb-2">
                      <input
                        type="email"
                        className="form-control w-50"
                        id="email"
                      />
                      <button
                        type="submit"
                        className="btn fw-bolder"
                        style={{ backgroundColor: "#003566", color: "white" }}
                        onClick={() => {
                          setEnterEmailInd(true);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                    <div className=" fw-normal" style={{ color: "#003566" }}>
                      You will receive by email address 6 digits one-time code
                      to activate XGUARD extension.
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div>
                    <label htmlFor="email" className=" fw-bold mb-2">
                      Enter 6 digits one-time code received sent to your email
                      address
                    </label>
                    <div className="text-center  m-auto  flex justify-between">
                      <div className=" w-60">
                        <input
                          type="tel"
                          className="form-control"
                          id="codeInd"
                        />
                        <button
                          type="submit"
                          className="btn mt-2 w-100 fw-bolder"
                          style={{ backgroundColor: "#003566", color: "white" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <hr />
              <div className="pt-2">
                You are not yet registered ?
                <div className=" text-center mt-2">
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="btn text-center fw-bolder"
                    style={{ backgroundColor: "#003566", color: "white" }}
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-start p-2">
              {!enterEmail ? (
                <>
                  {" "}
                  <div>
                    <label htmlFor="email" className=" fw-bold mb-2">
                      Enter your organization email address
                    </label>
                    <div className="text-center  flex justify-between mb-2">
                      <input
                        type="email"
                        className="form-control w-50"
                        id="email"
                      />
                      <button
                        type="submit"
                        className="btn fw-bolder"
                        style={{ backgroundColor: "#003566", color: "white" }}
                        onClick={() => {
                          setEnterEmail(true);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                    <div className=" fw-normal" style={{ color: "#003566" }}>
                      You will receive by email address 6 digits one-time code
                      to activate XGUARD extension.
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div>
                    <label htmlFor="email" className=" fw-bold mb-2">
                      Enter 6 digits one-time code received sent to your email
                      address
                    </label>
                    <div className="text-center  m-auto  flex justify-between">
                      <div className=" w-60">
                        <input
                          type="tel"
                          className="form-control"
                          id="codeInd"
                        />
                        <button
                          type="submit"
                          className="btn mt-2 w-100 fw-bolder"
                          style={{ backgroundColor: "#003566", color: "white" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <hr />
              <div className="pt-2">
                Organization not yet registered ?
                <div className=" text-center mt-2">
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="btn text-center fw-bolder"
                    style={{ backgroundColor: "#003566", color: "white" }}
                  >
                    Sign up for your organization
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="card-footer text-muted">Our Right</div>
    </div>
  );
}

export default IndexPopup;
