import React,{ Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {
    
    
    state = { 
        cita: {
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
        },
        error: false
        
     }

     handleChnage = e => {
       // console.log(e.target.name);

       this.setState({
         cita: {
           ...this.state.cita,
           [e.target.name]: e.target.value
         }
       })
     }

     handleSubmit = e => {
        e.preventDefault();

        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
          this.setState({
            error: true
          });
          return;
        }

        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        this.props.crearCita(nuevaCita);
     }
    

    render() { 

        const { error } = this.state;

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Nueva cita
                    </h2>
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los cambios son obligatorios</div> : null }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                          <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                name="mascota" 
                                id="mascota" 
                                className="form-control" 
                                placeholder="Mascota" 
                                onChange={this.handleChnage}
                                value={this.state.cita.mascota}
                                />
                          </div>        
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                          <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                name="propietario" 
                                id="propietario" 
                                className="form-control" 
                                placeholder="Propietario" 
                                onChange={this.handleChnage}
                                value={this.state.cita.propietario}/>
                          </div>                                      
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                          <div className="col-sm-8 col-lg-4">
                            <input 
                                type="date" 
                                name="fecha" 
                                id="fecha" 
                                className="form-control" 
                                placeholder="Mascota" 
                                onChange={this.handleChnage}
                                value={this.state.cita.fecha}
                                />
                          </div>        
                       
                          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                          <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                name="hora" 
                                id="hora" 
                                className="form-control" 
                                placeholder="Mascota" 
                                onChange={this.handleChnage}
                                value={this.state.cita.hora}
                                />
                          </div>        
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                          <div className="col-sm-8 col-lg-10">
                              <textarea
                              className="form-control"
                              type="text" 
                              name="sintomas" 
                              id="sintomas"                               
                              placeholder="Describe los Sintomas"
                              onChange={this.handleChnage}
                              value={this.state.cita.sintomas}
                              >
                              </textarea>                            
                          </div>        
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Crear cita" />
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;