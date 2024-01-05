const Map = require("immutable").Map;

const reducer = function (state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_PERSON":
            return state.update("persons",
                (persons) => [...persons, { index: action.index }]);
        case "REMOVE_PERSON":
            console.log("removing action.index "+action.index);
            return state.update("persons",
                (persons) => persons.filter(
                    (person) => person.index != action.index
                )
            );
        case "UPDATE_TOTAL":
            return state.update("totalAmountWithTip", amount => amount + action.amount);
    }
}

module.exports = reducer;