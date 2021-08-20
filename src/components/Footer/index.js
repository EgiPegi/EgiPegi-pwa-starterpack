import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-light bg-gradient text-center text-lg-start border"
      style={{ marginTop: 20 }}
    >
      {/* <!-- Copyright --> */}
      <div className="text-center p-3">
        © 2021 Design by :
        <a className="text-dark mx-2" href="https://github.com/EgiPegi" target="_blank" rel="noreferrer">
          EgiPegi
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
