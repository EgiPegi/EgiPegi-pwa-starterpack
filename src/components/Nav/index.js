import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navitem } from "./navitem";
import logo from "../../assets/Logos/logo.png";

import { connect } from "react-redux";

import { toggleNavbar } from "../../configs/Redux/Navbar/action";

const Nav = (props) => {
  const [NavState, setNavState] = useState(localStorage.getItem("nav-state"));
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--nav-width", props.isHide ? "56px" : "250px");
    root?.style.setProperty("--icon-size", props.isHide ? "18px" : "16px");
    root?.style.setProperty("--ml-n", props.isHide ? "5px" : "10px");
  }, [props.isHide]);
  return (
    <div className="navbar">
      <div className="nav-head">
        {props.isHide ? null : <img src={logo} className="nav-head-logo" alt="www" />}
        <div
          className="nav-head-logo"
          onClick={() => {
            props.toggleNavbar();
            // setNavHide(!NavHide);
          }}
        >
          <i className="fi fi-bs-menu-burger" style={{ fontSize: 26 }}></i>
        </div>
      </div>
      <div className="nav-main">
        {Navitem.map((r) => {
          return (
            <div key={r.name}>
              {!r.routes ? (
                <NavLink
                  to={r.path}
                  className="nav-item"
                  activeClassName="nav-item--active"
                  onClick={() => {
                    localStorage.setItem("nav-state", "");
                    setNavState("");
                  }}
                >
                  <b />
                  {/* <b className="cekung" /> */}
                  <i className={`fi ${r.icon} m-3 nav-icon`}></i>{" "}
                  {props.isHide ? null : (
                    <span className="nav-name">{r.name}</span>
                  )}
                </NavLink>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    className="nav-item"
                    onClick={() => {
                      if (NavState === r.name) {
                        localStorage.setItem("nav-state", "");
                        setNavState("");
                      } else {
                        localStorage.setItem("nav-state", r.name);
                        setNavState(r.name);
                      }
                    }}
                  >
                    <i className={`fi ${r.icon} m-3 nav-icon`}></i>{" "}
                    {props.isHide ? null : (
                      <span className="nav-name">{r.name}</span>
                    )}
                  </div>
                  <div>
                    {NavState === r.name
                      ? r.routes.map((rc) => {
                          return (
                            <div key={rc.name}>
                              <NavLink
                                to={rc.path}
                                className="subnav-item"
                                activeClassName="subnav-item--active"
                              >
                                <i className={`fi ${rc.icon} nav-icon`}></i>{" "}
                                {props.isHide ? null : (
                                  <span className="subnav-name">{rc.name}</span>
                                )}
                              </NavLink>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isHide: state.navbar.isHide,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavbar: () => dispatch(toggleNavbar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
