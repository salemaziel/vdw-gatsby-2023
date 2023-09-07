//import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";

//import headerStyles from "./header.module.css";

const Header = ({ siteTitle }) => (
  <>
  <div className="fixed top-0 w-full h-auto"
  style={{
    zIndex: '99',
  }}>
      <Navbar />
      </div>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
