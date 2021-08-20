import React, { useEffect, useRef, useState } from "react";

const DropDownMenu = ({ icon, children }) => {
  const [show, setShow] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    // console.log(myRef)
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  });

  return (
    <div className="dropdown" ref={myRef} >
      <button className="button" onClick={() => setShow(!show)}>
        <span className={icon + " icon"}></span>
      </button>
      {show ? (
        <main>
          <div className="main">{children}</div>
        </main>
      ) : null}
    </div>
  );
};

export default DropDownMenu;
