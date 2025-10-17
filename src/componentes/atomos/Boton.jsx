import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Boton({ to, label }) {
  return (
    <Link className={"btn btn-primary"} to={to}>
      {label}
    </Link>
  );
}

Boton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};