import counterConstants from "../constants/counterConstant";

export const incrementCounterAction = (payload) => ({
    type: counterConstants.INCREMENT_COUNTER,
    payload
})

export const decrementCounterAction = (payload) => ({
    type: counterConstants.DECREMENT_COUNTER,
    payload
})

export const toggleCounterAction = () => ({
    type: counterConstants.TOGGLE_COUNTER,
})





