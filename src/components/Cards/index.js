import React from "react";

class Cards extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
        }
    }
    render() {
        let hotel = this.props.hotel;
        
        return (
            <div>
                <img src={require("../../components/assets" + hotel.photo)}></img>
                <h1>{hotel.name}</h1>
                <h3>{hotel.description}</h3>
                <h3>{hotel.rooms}</h3>
                <h4>{hotel.city}, {hotel.country}</h4>
                <h4>{hotel.price}</h4>


            </div>
        )
    }
}

export default Cards;