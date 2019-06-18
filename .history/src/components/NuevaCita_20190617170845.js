import React from 'react';

class NuevaCita extends Component {
    
    
    this.state = {  }
    

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
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;