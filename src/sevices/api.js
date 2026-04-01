import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api"
});

export const getEvents = () => API.get("/events");

export const createEvent = (event) => API.post("/events", event);

export const registerUser = (user) => API.post("/users/register", user);

export const loginUser = (user) => API.post("/users/login", user);