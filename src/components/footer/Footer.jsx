import React from "react";
import "./Footer.module.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; <span id="year"></span> Ash Market{" "}
        <span>- All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
