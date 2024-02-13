import * as ActionTypes from "../ActionTypes";

const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case ActionTypes.ADD_BY:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
}

export default counterReducer;
