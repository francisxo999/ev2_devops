import React from "react";
import PropTypes from 'prop-types';

export default function Texto({ texto }) {
  return <p> {texto} </p>;
}

Texto.propTypes = {
  texto: PropTypes.string.isRequired,
};