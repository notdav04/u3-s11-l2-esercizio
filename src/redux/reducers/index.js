import { ADD_FAV } from "../actions";

const initialState = {
  main: {
    favourites: [],
    nFavourites: 0
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      if (!state.main.favourites.includes(action.payload)) {
        return {
          ...state,
          main: {
            ...state.main,
            favourites: [...state.main.favourites, action.payload],
            nFavourites: state.main.nFavourites + 1
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default mainReducer;
