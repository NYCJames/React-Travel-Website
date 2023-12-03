import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
// import "../App.css";

const STYLES = [`btn--primary`, `btn--outline`];
const SIZES = [`btn--medium`, `btn--large`];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={`/`} className="btn-mobile">
      <button
        type={type}
        onClick={onClick}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </button>
    </Link>
  );
}
