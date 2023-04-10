/** @format */

import React from "react";
import PropTypes from "prop-types";
import ECHeader from "../components/header/header";
import "./header.css";

export const Header = (props: any) => <ECHeader {...props} />;

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
