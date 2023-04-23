import React from "react";
import { PropTypes } from "prop-types";

export default function Header(props) {
  return (
    <>
      <nav className="navbar sticky-top justify-content-center bg-body-secondary">
        <p className="fs-2">{props.title}</p>
      </nav>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Hii this is default title",
};
