const React = require("react");
const Form = require("react-bootstrap").Form;
const Col = require("react-bootstrap").Col;
const PeopleFill = require("react-bootstrap-icons").PeopleFill;
const connect = require("react-redux").connect;
const actions = require("../actions.jsx");

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalSum: 0,
            totalSumWithTip: 0
        }
    }

    comparing(props) {
        let comparing;
        if (props.left == props.right) {
            comparing = <label>=</label>;
        } else if (props.left < props.right) {
            comparing = <label>&lt;</label>;
        } else {
            comparing = <label>></label>;
        }
        return comparing;
    }

    render() {
        return <div>
            <Form.Group className="row">
                <Col xs={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PeopleFill />
                </Col>
                <Col xs={3} style={{ display: 'flex', justifyContent: 'right' }}>
                <Form.Control  type='number' min='0' placeholder='1.0' step='0.01'
                    autoFocus 
                    value={this.state.totalSum}
                    onChange={e => {
                        this.setState({ totalSum: e.target.value });
                    }}
                    ></Form.Control>
                </Col>
                <Col xs={1} style={{ display: 'flex', justifyContent: 'right' }}>
                <Form.Text >
                    &nbsp;<this.comparing
                        left={this.state.totalSum} right={this.props.totalAmountWithTip} />&nbsp;

                    <label>{this.props.totalAmountWithTip.toFixed(2)}</label>
                    
                    </Form.Text>
                </Col>
                <label>&nbsp;</label>
                <hr/>
            </Form.Group>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        totalAmountWithTip: state.get("totalAmountWithTip")
    };
}

module.exports = connect(mapStateToProps, actions)(Header);
