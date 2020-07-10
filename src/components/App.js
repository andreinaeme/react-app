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
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header filtros={this.state} />
        <Filters filtros={this.state} onChange={this.onChange} />
        <Hotels />
      </div>
    );
  }
};

export default App;


