const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      //   for 5 increment
      return state + action.payload;

    case "DECREMENT":
      let newState = 0;
      state >= 1 ? (newState = state - action.payload) : (newState = 0);
      return newState;
    default:
      return state;
  }
};

export default changeTheNumber;
