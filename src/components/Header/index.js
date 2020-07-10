import React from "react";
import style from "./header.css";

class Header extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
        }
    }

    render() {
        const divStyle = {
            border: 'none',
            background: '#565',
        };

        return (
            <div style={divStyle}>
                <h1> este es mi encabezado
                    {this.props.filtros.fechaLlegada}
                    {this.props.filtros.fechaSalida}
                </h1>
            </div>
        )
    }

}


export default Header;







