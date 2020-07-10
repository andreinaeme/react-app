import React from "react";

class Filters extends React.Component {

    constructor(args){
        super(args);
        this.state = {
        }
    }

    render(){
        return(
            <div>
            <input value={this.props.filtros.fechaLlegada} 
            onChange={this.props.onChange.bind(this)} placeholder= "Fecha de llegada" name="fechaLlegada" id="fechaLlegada" type="date" />
            
            <input value={this.props.filtros.fechaSalida} 
            onChange={this.props.onChange.bind(this)} placeholder= "Fecha de salida " name="fechaSalida" id="fechaSalida" type="date" />
            
            <select onChange={this.props.onChange.bind(this)} value={this.props.filtros.paises} name="paises">
                <option value="">Todos los países</option>
                <option value="Ar">Argentina</option>
                <option value="Br">Brasil</option>
                <option value="Ur">Uruguai</option>
            </select>
            
            <select>
                <option value="">Cualquier Precio</option>
                <option value="uno">$</option>
                <option value="dos">$$</option>
                <option value="tres">$$$</option>
                <option value="cuatro">$$$$</option>
            </select>
            
            <select>
                <option value="">Cualquier Tamaño</option>
                <option value="uno">1-10 habitaciones</option>
                <option value="dos">10-20 habitaciones</option>
                <option value="tres">20 +</option>
            </select>
            </div>
        )
    }
}

export default Filters;