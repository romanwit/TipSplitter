const React = require("react");
const Button = require("react-bootstrap").Button;
const Form = require("react-bootstrap").Form;
const connect = require("react-redux").connect;
const actions = require("../actions.jsx");

var totalSum = 0;
var oldTotalSum = 0;

class Tipper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: parseFloat(0),
            tip: parseFloat(10),
            totalSum: parseFloat(0),
            oldTotalSum: parseFloat(0)
        };
    }

    render() {
        return <div>
            <Form.Group className="row">
            <Form.Control className="col-sm" type='number' min='0' placeholder='1.0' step='0.01'
                onChange={e => {
                    this.setState({ amount: e.target.value });
                }}
                value={this.state.amount}></Form.Control> +&nbsp;
            <Form.Control className="col-sm" type='number' min='0' placeholder='1.0' step='0.01'
                onChange={e => {
                    this.setState({ tip: e.target.value })
            }}
                    value={this.state.tip}></Form.Control>
            <div className="col-sm-4">&nbsp;% =&nbsp;    
                <label>{
                    (!isNaN(parseFloat(this.state.amount))) ?
                        (parseFloat(this.state.amount) +
                            parseFloat(this.state.amount) * (this.state.tip / 100)).toFixed(2) : ""}</label>
                    &nbsp;
            </div>
            <div className="col-sm">
                <Button variant="primary" onClick={this.add.bind(this)}>
                    +
                </Button>
                <Button variant="primary" onClick={this.remove.bind(this)} disabled={this.props.persons.length == 1}>
                    -
                </Button>
            </div>
            </Form.Group>
        </div>;
    }

    componentDidUpdate() {
        if (!isNaN(parseFloat(this.state.amount))) {
            this.state.oldTotalSum = this.state.totalSum;
            this.state.totalSum = parseFloat(this.state.amount) + parseFloat(this.state.amount) * (this.state.tip / 100);
        }
        if (this.state.totalSum != this.state.oldTotalSum) {

            this.props.update(this.state.totalSum - this.state.oldTotalSum);
        }
    }

    add() {
        var maxIndex = Math.max(...this.props.persons.map(person => person.index));
        this.props.addPerson(maxIndex + 1);
    }

    remove() {
        this.props.removePerson(this.props.dataKey);
        this.props.update(-1 * this.state.totalSum);
    }
}

function mapStateToProps(state) {
    return {
        persons: state.get("persons")
    };
}

module.exports = connect(mapStateToProps, actions)(Tipper);