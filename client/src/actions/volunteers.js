import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

export const getVolunteers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVolunteers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createVolunteer = (volunteer) => async (dispatch) => {
  try {
    const { data } = await api.createVolunteer(volunteer);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateVolunteers = (id, volunteers) => async (dispatch) => {
  try {
    const { data } = await api.updateVolunteers(id, volunteers);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteVolunteers = (id) => async (dispatch) => {
  try {
    await api.deleteVolunteers(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
