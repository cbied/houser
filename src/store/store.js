import { createStore } from 'redux'

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  houses: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_IMG = "UPDATE_IMG";
export const GET_HOUSES = "GET_HOUSES";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_CITY:
      return { ...state, city: action.payload };
    case UPDATE_STATE:
      return { ...state, state: action.payload };
    case UPDATE_ZIP:
      return { ...state, zip: action.payload };
    case UPDATE_IMG:
      return { ...state, img: action.payload };
    case `${GET_HOUSES}_FULFILLED`:
      return { ...state, houses: action.payload };
    default:
      return state;
  }
}




export default createStore(reducer);