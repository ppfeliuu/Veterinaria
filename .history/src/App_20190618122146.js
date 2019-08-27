import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {

  state = {
    citas: []
  }

  crearCita = datos => {
    const citas = [...this.state.citas, datos];

    this.setState({ citas });
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({ citas });

  }

  render() {  

    return(
      <div className="container">
        <Header
          titulo='Admin Veterinaria' />        

        <div  className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita  crearCita={this.crearCita}/>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;