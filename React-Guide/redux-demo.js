const redux = require("redux");

//this reducer is what manipulates the store
//the initial state on this reducer is set to a value of counter with a value of 0
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//this is the state managemnt
const store = redux.createStore(counterReducer);

//this subscriber retreaves the state and prints it to the console.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//this call points the store to the subscriber function
store.subscribe(counterSubscriber);

//dispatch an object with a type identifier
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

//run 'node redux-demo.js' in the console to see the counter working
