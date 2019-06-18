import React,{ Component } from 'react';

class NuevaCita extends Component {
    
    
    state = {  }
    

    render() { 
        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Nueva cita
                    </h2>

                    <form>
                        <div class="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                          <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                name="mascota" 
                                id="" 
                                className="form-control" 
                                placeholder="Mascota" />
                          </div>        
                        </div>

                        <div class="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                          <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                name="propietario" 
                                id="" 
                                className="form-control" 
                                placeholder="Dueño" />
                          </div>                                      
                        </div>

                        <div class="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                          <div className="col-sm-8 col-lg-4">
                            <input 
                                type="date" 
                                name="fecha" 
                                id="" 
                                className="form-control" 
                                placeholder="Mascota" />
                          </div>        
                       
                          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                          <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                name="hora" 
                                id="" 
                                className="form-control" 
                                placeholder="Mascota" />
                          </div>        
                        </div>

                        <div class="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                          <div className="col-sm-8 col-lg-10">
                              <textarea
                              className="form-control"
                              type="text" 
                              name="sintomas" 
                              id=""                               
                              placeholder="Describe los Sintomas">
                              </textarea>                            
                          </div>        
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;