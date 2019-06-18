import React,{ Component } from 'react';

class NuevaCita extends Component {
    
    
    state = { 
        cita: {
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
        }
     }

     handleChnage = e => {
       console.log(e.target.name);
     }
    

    render() { 
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Nueva cita
                    </h2>

                    <form>
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
                                placeholder="Dueño" />
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
                                placeholder="Mascota" />
                          </div>        
                       
                          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                          <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                name="hora" 
                                id="hora" 
                                className="form-control" 
                                placeholder="Mascota" />
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
                              placeholder="Describe los Sintomas">
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