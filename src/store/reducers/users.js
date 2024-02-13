import * as ActionTypes from "../ActionTypes";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case ActionTypes.USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default usersReducer;
