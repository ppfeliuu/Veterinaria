import React from 'react';

const ListaCitas = ({citas}) => (

        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">Lista Citas</h2>

                <div className="lista-citas">
                    {citas.map(cita => (
                        
                    ))}
                </div>
            </div>
        </div>
        

);


export default ListaCitas;