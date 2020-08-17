class Hotels extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
    }
  }
  filtroDePaises(item) {
    const filtros = this.props.filtros;

    if (filtros.paises === "") {
      return true;
    } else {
      return item.country === filtros.paises;
    }
  };

  filtroDePrecio(item) {
    const filtros = this.props.filtros;

    if (filtros.precio === "") {
      return true;
    } else {
      return item.price == filtros.precio;
    }
  };

  filtroDeHabitaciones(item) {
    const filtros = this.props.filtros;

    if (filtros.habitaciones === "") {
      return true;
    } else {
      switch (filtros.habitaciones) {
        case "pequeño":
          return item.rooms >= 1 && item.rooms <= 10;
        case "mediano":
          return item.rooms > 10 && item.rooms <= 20;
        case "grande":
          return item.rooms > 20;
        default:
          return false;
      }
    }
  };

  filtroDeFechaLlegada(item) {
    const filtros = this.props.filtros;

    if (filtros.fechaLlegada === "") {
      return true;
    } else {
      let milisegundos = new Date(filtros.fechaLlegada).valueOf();
      if (item.name === "La Bamba de Areco") {
        console.log("name: " + item.name);
        console.log("availabilityFrom: " + item.availabilityFrom);
        console.log("availabilityTo: " + item.availabilityTo);
        console.log("milisegundos: " + milisegundos);
        console.log(filtros.fechaLlegada);
      }
      return milisegundos >= item.availabilityFrom && milisegundos <= item.availabilityTo;
    }
  };

  filtroDeFechaSalida(item) {
    const filtros = this.props.filtros;

    if (filtros.fechaSalida === "") {
      return true;
    } else {
      let milisegundos = new Date(filtros.fechaSalida).valueOf();
      return milisegundos >= item.availabilityFrom && milisegundos <= item.availabilityTo;
    }
  };

  render() {
    const items = hotelsData;

    const resultItems = items.filter(item => this.filtroDePaises(item) && this.filtroDePrecio(item)
      && this.filtroDeHabitaciones(item) && this.filtroDeFechaSalida(item) && this.filtroDeFechaLlegada(item));

    const jsxCards = resultItems.map((item, index) => {
      return <Cards key={index} hotel={item} />
    });

    let result;

    if (jsxCards === undefined || jsxCards.length == 0) {
      result = <h2>Lo sentimos, no encontramos resultados para su busqueda</h2>
    } else {
      result = jsxCards;
    }
    return (
      <div className="container">
        {result}
      </div>
    )
  }

}