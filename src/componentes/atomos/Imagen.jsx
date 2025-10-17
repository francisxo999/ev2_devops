import React from "react";
import PropTypes from 'prop-types';

export default function Imagen({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="img-avatar rounded-circle"
      style={{ width: "200px", heigth: "300px" }}
    />
  );
}

Imagen.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};