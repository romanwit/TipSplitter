const correctTotalSum = function (amount) {
    return {
        type: "CORRECT_TOTAL_SUM",
        amount
    }
};

const addPerson = function (index) {
    return {
        type: "ADD_PERSON",
        index
    }

};

const removePerson = function (index) {
    return {
        type: "REMOVE_PERSON",
        index
    }
};

const updateTotalAmountWithTip = function (amount) {
    return {
        type: "UPDATE_TOTAL",
        amount
    }
}

module.exports = { correctTotalSum, addPerson, removePerson };