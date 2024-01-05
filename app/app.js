const ReactDOM = require("react-dom/client");
const React = require("react");
const Tipper = require("./components/tipper.jsx");
const Tipppers = require("./components/tippers.jsx");
const Header = require("./components/header.jsx");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");

const store = redux.createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        persons: [{ index: 0 }],
        totalAmountWithTip: 0
    }
});

var update = function (amount) {
    store.dispatch({
        type: "UPDATE_TOTAL",
        amount: amount
    });

}

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <div>
            <Provider store={store}>
                <Header />
                <Tipppers update={update.bind(this)} />
            </Provider>
        </div>
);

