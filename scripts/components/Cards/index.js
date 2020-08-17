class Cards extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
        }
    }

    render() {
        const hotel = this.props.hotel;

        let resultPrice = "";
        for (var i = 0; i < hotel.price; i++) {
            resultPrice = resultPrice+"$";
        }

        return (
            <div className="card">
                <img src={"../../." + hotel.photo}></img>
                <h1>{hotel.name}</h1>
                <h3>{hotel.description}</h3>
                <h4>Habitaciones: {hotel.rooms}</h4>
                <h4>{hotel.city}, {hotel.country}</h4>
                <h4>{resultPrice}</h4>
            </div>
        )
    }
}