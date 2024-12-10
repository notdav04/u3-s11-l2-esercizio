import { ADD_FAV } from "../actions";

const initialState = {
  favourites: [],
  nFavourites: 0
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      if (!state.favourites.includes(action.payload)) {
        return {
          ...state,

          favourites: [...state.favourites, action.payload],
          nFavourites: state.nFavourites + 1
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default mainReducer;
