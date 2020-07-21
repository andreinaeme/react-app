import React from "react";
import Filters from "./Filters";
import Header from "./Header";
import Hotels from "./Hotels";

class App extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      fechaLlegada: "",
      fechaSalida: "",
      paises: "",
      precio: "",
      habitaciones: "",
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      {/*le estoy pasando un estado al parametro de mi componente.*/}
        <Header filtros={this.state} />
        <Filters filtros={this.state} onChangeHandler={this.onChangeHandler} />
        <Hotels filtros={this.state} />
      </div>
    );
  }
};

export default App;


