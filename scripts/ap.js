
class ap extends React.Component {

  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div>
        Hola mundo!
      </div>
    );
  }
};

ReactDOM.render(React.createElement(ap, null), document.getElementById('App'));

