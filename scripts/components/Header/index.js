class Header extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
        }
    }

    render() {
        

        let fechaLlegadaFormateada = moment(this.props.filtros.fechaLlegada);
        fechaLlegadaFormateada = fechaLlegadaFormateada.format('LL');

        let fechaSalidaFormateada = moment(this.props.filtros.fechaSalida);
        fechaSalidaFormateada = fechaSalidaFormateada.format('LL');

        if(this.props.filtros.fechaLlegada==="") {
            fechaLlegadaFormateada= "fecha de Llegada";
        }
        if(this.props.filtros.fechaSalida==="") {
            fechaSalidaFormateada= "fecha de Salida";
        }

        return (
            <div className="encabezado">
                <h1>Hoteles
                </h1>
                <h2> Desde: {fechaLlegadaFormateada} hasta: {fechaSalidaFormateada}</h2>
            </div>
        )
    }

}







