import React from 'react';

const Cita = ({cita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre propietario: </span> {cita.propietario}</p>
        </div>
    </div>

);
 
export default Cita;