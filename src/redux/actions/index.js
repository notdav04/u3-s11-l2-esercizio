import { useDispatch } from "react-redux";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_JOB = "GET_JOB";

export const addfavAction = (data) => {
  return {
    type: ADD_FAV,
    payload: data
  };
};

export const removefavAction = (element) => {
  return {
    type: REMOVE_FAV,
    payload: element
  };
};

export const getJobj = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
