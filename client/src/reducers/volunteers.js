import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (volunteers = [], action) => {
  switch (action.type) {
    case DELETE:
      return volunteers.filter((volunteer) => volunteer._id !== action.payload);
    case UPDATE:
      return volunteers.map((volunteer) =>
        volunteer._id === action.payload._id ? action.payload : volunteer
      );
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...volunteers, action.payload];
    default:
      return volunteers;
  }
};
