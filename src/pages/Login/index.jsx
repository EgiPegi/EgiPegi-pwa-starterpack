import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../configs/Redux/Auth/action";
import { clearMessage } from "../../configs/Redux/Message/action";

const Login = () => {
  const initialAuthState = {
    username: "",
    email: "",
    password: "",
  };

  const history = useHistory();

  const [credential, setCredential] = useState(initialAuthState);
  const [isLoading, setIsLoading] = useState(false);

  const message = useSelector((state) => state.message.message);
  const status = useSelector((state) => state.message.status);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(status);
    if (isLogin) {
      history.push("/");
    }
  }, [isLogin, history]);
  const handleLogin = (e) => {
    const { username, password } = credential;
    setIsLoading(true);
    dispatch(login(username, password))
      .then((data) => {
        // console.log(data);
        history.push("/");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // console.log(message);
    e.preventDefault();
    // Fo;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  // console.log(isLoading);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {/* TITLE  */}
      {/* FORM  */}

      <div className="card w-50 position-relative">
        {message ? (
          <div
            className={
              status === "error"
                ? "alert alert-danger position-absolute bottom-100 w-100"
                : "alert alert-success position-absolute bottom-100 w-100"
            }
            role="alert"
          >
            {message}
          </div>
        ) : (
          <div></div>
        )}
        <div className="card-header">Sign In to Access This WebApp!</div>

        <form
          onSubmit={handleLogin}
          // ref={(c) => {
          //   form = c;
          // }}
          className="card-body"
        >
          {/* BODY FORM  */}
          <div className="form-body mt-2 mb-2">
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Username*"
                name="username"
                id="username"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password*"
                name="password"
                id="password"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="rule"></div>

          {/* FOOTER FORM  */}
          {isLoading ? (
            <button className="btn-disabled w-100" disabled>
              <div className="loader"></div> LOGIN ...
            </button>
          ) : (
            <button className="btn btn-primary w-100">LOGIN</button>
          )}
          <div className="form-footer" style={{ justifyContent: "flex-end" }}>
            <span
              onClick={() => {
                dispatch(clearMessage());
                history.push("/create-account");
              }}
            >
              or create account here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
