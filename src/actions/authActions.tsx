import apiClient from "../constants/apiClient";
import { API_ENDPOINTS } from "../constants/endPoints";
import {
  clearError,
  clearMessage,
  editProfileFail,
  editProfileRequest,
  editProfileSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutSuccess,
} from "../slices/authSlice";

export const login = (email,phone, password, role) => async (dispatch) => {
  let inputData = {
    role,
    password,
  };

  if (role === "employee") {
    inputData = {...inputData, email};
  } else if (role === "patient") {
    inputData = {...inputData, phone};
  }

  try {
    dispatch(loginRequest());
    const { data } = await apiClient.post(API_ENDPOINTS.LOGIN, inputData);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const editUser = (formData) => async (dispatch) => {
  
  try {
    dispatch(editProfileRequest());
    const { data } = await apiClient.post(API_ENDPOINTS.USER_PROFILE_EDIT, formData);
    dispatch(editProfileSuccess(data));
  } catch (error) {
    dispatch(editProfileFail(error.response.data.message));
  }
};

export const logout = async (dispatch) => {
  try {
    await apiClient.get(API_ENDPOINTS.LOGOUT);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};

export const loadUser = async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await apiClient.get(API_ENDPOINTS.USER_PROFILE);
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const clearAuthError = (dispatch) => {
  dispatch(clearError());
};
export const clearAuthMessage = (dispatch) => {
  dispatch(clearMessage());
};


