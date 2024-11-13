const redux = require('redux');
const createStore = redux.createStore;

// INITIAL STATE
const initialState = {
    cake: 10,
    email: "",
    firstname: "",
    todo: [],
};

// ACTION CREATOR
const orderCake = () => {
    return {
        type: "dudu"
    };
};

// REDUCER
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "dudu":
            return {
                ...state,
                cake: state.cake - 1
            };
        default:
            return state;
    };
};


const store = createStore(cakeReducer);

console.log('enoch initial store', store.getState());

store.subscribe(() => {
    console.log('for checking', store.getState());
});

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

// ACTION TYPE