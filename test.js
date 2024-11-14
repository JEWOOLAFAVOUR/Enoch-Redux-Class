const redux = require('redux');
const createStore = redux.createStore;

// INITIAL STATE
const initialState = {
    cake: 10,
    cookies: 20,
};

// ACTION CREATOR
const orderCake = (enoch) => {
    return {
        type: "cake",
        enoch
    };
};

const restockCake = () => {
    return {
        type: "cake_restock"
    };
};

const orderCookies = () => {
    return {
        type: "cookies"
    };
};

// REDUCER
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cake":
            return {
                ...state,
                cake: state.cake - action.enoch
            };
        case "cake_restock":
            return {
                ...state,
                cake: state.cake + 1
            };
        case "cookies":
            return {
                ...state,
                cookies: state.cookies - 1
            }
        default:
            return state;
    };
};


const store = createStore(cakeReducer);

console.log('enoch initial store', store.getState());

store.subscribe(() => {
    console.log('for checking', store.getState());
});

store.dispatch(orderCake(5))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCookies())
// store.dispatch(orderCookies())
// store.dispatch(restockCake())

// ACTION TYPE

