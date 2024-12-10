import { REMOVE_FAV } from "../actions";

const initialState = {
  favourites: [],
  nFavourites: 0
};

const removeFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAV:
      const updatedFavourites = state.favourites.filter(
        (fav) => fav !== action.payload
      );
      return {
        ...state,
        favourites: updatedFavourites,
        nFavourites: state.nFavourites - 1
      };
    default:
      return state;
  }
};

export default removeFavReducer;
