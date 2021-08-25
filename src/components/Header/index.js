import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../configs/Redux/Auth/action";
import eventBus from "../../core/EventBus";
import DropDownMenu from "../DropDownMenu";

const Header = () => {
  const [showToggle, setShowToggle] = useState(false);
  const dispatch = useDispatch();

  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShowToggle(false);
    }
  };

  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    eventBus.on("logout", () => dispatch(logout()));
    const root = document.documentElement;
    root?.style.setProperty("--mobile-hide", showToggle ? "visible" : "hidden");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      eventBus.remove("logout");
    };
  }, [dispatch, showToggle]);

  return (
    <div className="main-header " ref={myRef}>
      <div className="dropdown-tgl" onClick={() => setShowToggle(!showToggle)}  >
        <i
          className={!showToggle ? "fi fi-bs-apps-add" : "fi fi-bs-apps-delete"}
          style={{ fontSize: 26, color: "white" }}
        ></i>
      </div>
      <div className="right-header">
        <DropDownMenu icon="fi-bs-bell-ring">
          <div className="item">My Task</div>
          <div className="item">My Schedule</div>
        </DropDownMenu>
        <DropDownMenu icon="fi-bs-checkbox">
          <div className="item">My Task</div>
          <div className="item">My Schedule</div>{" "}
        </DropDownMenu>
        <DropDownMenu icon="fi-bs-calendar">
          <div className="item">My Task</div>
          <div className="item">My Schedule</div>
        </DropDownMenu>
        <DropDownMenu icon="fi-bs-user">
          <div className="item">My Account</div>
          <div className="item">My Task</div>
          <div className="item">My Schedule</div>
          <div className="item" onClick={logOut}>
            Log Out
          </div>
        </DropDownMenu>
      </div>
    </div>
  );
};

export default Header;
