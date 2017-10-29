import { API_URL } from '../config.js';
import axios from 'axios';

export const createUser = (payload) => axios.post(`${API_URL}/user`, payload);

export const signUpUSer = (data) => axios.post(`${API_URL}/signup`, data);

export const getUserByID = (userID) =>
  axios.get(`${API_URL}/user/${userID}`, userID );

export const updateUserByID = (userID, payload) =>
  axios.put(`${API_URL}/user/${userID}`, payload);

export const removeUser = (userID) => axios.delete(`${API_URL}/user/${userID}`)

export const getUsers = (params) =>
  axios.get(`${API_URL}/user`, {
    params,
  });