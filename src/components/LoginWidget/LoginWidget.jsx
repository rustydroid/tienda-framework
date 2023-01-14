import React from "react";
import LoginIcon from "../images/user-logged.svg";

const LoginWidget = () => {
  return (
    <>
      <div style={{ float: "right" }}>
        <div className="loginicons mr-auto">
          <a href="cart.html" className="icons-btn d-inline-block bag">
            <span className="icon-login-user">
              <img src={LoginIcon} alt="" className="m-1" width="40" height="40" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginWidget;
