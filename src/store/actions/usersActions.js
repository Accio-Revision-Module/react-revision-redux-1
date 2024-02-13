import * as ActionTypes from "../ActionTypes";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: ActionTypes.USERS_LOADING });
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const res = await fetch(url);
    const data = await res.json();

    dispatch({ type: ActionTypes.USERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ActionTypes.USERS_FAILED, payload: e });
  }
};
