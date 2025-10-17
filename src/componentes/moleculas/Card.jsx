import React from "react";
import PropTypes from 'prop-types';
import Boton from "../atomos/Boton";
import Texto from "../atomos/Texto";
import Imagen from "../atomos/Imagen";

export default function Card({ descripcion }) {
  return (
    <div className="p-4 border rounded-lg shadow-md flex flex-col align-items-center text-center">
      <Imagen src={descripcion.foto} alt={descripcion.nombre} />
      <h1>{descripcion.nombre}</h1>
      <Texto texto={descripcion.descripcion} />
      <Boton to={`/detail/${descripcion.id}`} label="Ver más" />
    </div>
  );
}

Card.propTypes = {
  descripcion: PropTypes.shape({
    id: PropTypes.number.isRequired,
    foto: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
};