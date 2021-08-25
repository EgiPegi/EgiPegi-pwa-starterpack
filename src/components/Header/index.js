import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../configs/Redux/Auth/action";
import eventBus from "../../core/EventBus";
import useDetectNetwork from "../../core/Hooks/useDetectNetwork";
import DropDownMenu from "../DropDownMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { speed, status: isOnline } = useDetectNetwork();

  const logOut = () => {
    dispatch(logout());
  };
  // console.log(isOnline);
  // console.log(speed);

  useEffect(() => {
    eventBus.on("logout", () => dispatch(logout()));
    return () => {
      eventBus.remove("logout");
    };
  }, [dispatch]);

  return (
    <div className="main-header">
      <div className="right-header">
        <div className="text-light m-1 float-end">
          {isOnline ? "Online" : "Offline"}
          <div style={{ fontSize: 12, margin: 0, padding: 0 }}>{speed}</div>
        </div>
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
