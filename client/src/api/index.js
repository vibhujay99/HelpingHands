import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchVolunteers = () => API.get("/volunteers");
export const createVolunteer = (newVolunteer) =>
  API.post("/volunteers", newVolunteer);
export const updateVolunteers = (id, updateVolunteers) =>
  API.patch(`/volunteers/${id}`, updateVolunteers);
export const deleteVolunteers = (id) => API.delete(`/volunteers/${id}`);
