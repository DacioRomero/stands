import axios from 'axios';

import { LOGIN, LOGOUT, FETCH_REPORT, DELETE_REPORT } from './types';

const standsUrl = process.env.REACT_APP_STANDS_URL;

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const response = await axios.post(`${standsUrl}/login`, { username, password });
    dispatch(loginSuccess(response.data));
  }
};

export const register = ({ username, password }) => {
  return async (dispatch) => {
    const response = await axios.post(`${standsUrl}/register`, { username, password });
    dispatch(loginSuccess(response.data));
  }
};

export const loginSuccess = (jwt) => ({
  type: LOGIN,
  jwt
});

export const logout = () => ({
  type: LOGOUT
});

export const fetchReport = () => {
  return async (dispatch) => {
    const response = await axios.get(`${standsUrl}/reports`);
    dispatch(fetchReportSuccess(response.data));
  }
};

export const fetchReportSuccess = (reports) => ({
  type: FETCH_REPORT,
  reports
});

export const deleteReport = (id) => {
  return async (dispatch) => {
    await axios.delete(`${standsUrl}/reports/${id}`);
    dispatch(deleteReportSuccess(id));
  }
};

export const deleteReportSuccess = (id) => ({
  type: DELETE_REPORT,
  id
});
