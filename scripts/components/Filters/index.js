class Filters extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
        }
    }

    render() {
        const divStyle = {
            border: 'none',
            background: '#3D828B',
        };
        return (

            <div className="estilos">

                <input value={this.props.filtros.fechaLlegada}
                    onChange={this.props.onChangeHandler.bind(this)} placeholder="Fecha de llegada" name="fechaLlegada" id="fechaLlegada" type="date" />

                <input value={this.props.filtros.fechaSalida}
                    onChange={this.props.onChangeHandler.bind(this)} placeholder="Fecha de salida " name="fechaSalida" id="fechaSalida" type="date" />

                <select onChange={this.props.onChangeHandler.bind(this)}
                    value={this.props.filtros.paises} name="paises">
                    <option value="">Todos los paises</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Uruguay">Uruguay</option>
                </select>

                <select onChange={this.props.onChangeHandler.bind(this)}
                    value={this.props.filtros.precio} name="precio">
                    <option value="">Cualquier Precio</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>

                <select onChange={this.props.onChangeHandler.bind(this)}
                    value={this.props.filtros.habitaciones} name="habitaciones">
                    <option value="">Cualquier Tamaño</option>
                    <option value="pequeño">1-10 habitaciones</option>
                    <option value="mediano">10-20 habitaciones</option>
                    <option value="grande">20 +</option>
                </select>
            </div>
        )
    }
}