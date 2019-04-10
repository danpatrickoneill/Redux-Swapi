import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  err: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        isFetching: false,
        err: null
      };

    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.err
      };

    default:
      return state;
  }
};
