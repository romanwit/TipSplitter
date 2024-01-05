const React = require("react");
const connect = require("react-redux").connect;
const Tipper = require(".//tipper.jsx");
const actions = require("../actions.jsx");

class Tippers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Tipper key={person.index} dataKey={person.index != undefined ? person.index : 20}
                update={this.props.update} />
        });
        
    }
}

function mapStateToProps(state) {
    return {
        persons: state.get("persons")
    };
}

module.exports = connect(mapStateToProps, actions)(Tippers);