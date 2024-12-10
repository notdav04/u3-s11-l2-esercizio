export const ADD_FAV = "ADD_FAV";

export const addfavAction = (data) => {
  return {
    type: ADD_FAV,
    payload: data.company_name
  };
};
