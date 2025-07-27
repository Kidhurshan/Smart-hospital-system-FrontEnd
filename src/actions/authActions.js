import apiClient from "../constants/apiClient";
import { API_ENDPOINTS } from "../constants/endPoints";
import {
  chnagePasswordFail,
  chnagePasswordRequest,
  chnagePasswordSuccess,
  clearError,
  clearMessage,
  clearSuccess,
  deleteUserFail,
  deleteUserRequest,
  deleteUserSuccess,
  editProfileFail,
  editProfileRequest,
  editProfileSuccess,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "../slices/authSlice";

export const login = (email, phone, password, role) => async (dispatch) => {
  let inputData = {
    role,
    password,
  };

  if (role === "employee") {
    inputData = { ...inputData, email };
  } else if (role === "patient") {
    inputData = { ...inputData, phone };
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
    const { data } = await apiClient.post(
      API_ENDPOINTS.USER_PROFILE_EDIT,
      formData
    );
    dispatch(editProfileSuccess(data));
  } catch (error) {
    dispatch(editProfileFail(error.response.data.message));
  }
};

export const changePassword = (formData) => async (dispatch) => {
  try {
    dispatch(chnagePasswordRequest());
    const { data } = await apiClient.post(
      API_ENDPOINTS.CHANGE_PASSWORD,
      formData
    );
    dispatch(chnagePasswordSuccess(data));
  } catch (error) {
    dispatch(chnagePasswordFail(error.response.data.message));
  }
};

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());
    await apiClient.post(API_ENDPOINTS.FORGOT_PASSWORD, formData);
    dispatch(forgotPasswordSuccess());
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (formData, params) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());
    const { data } = await apiClient.post(
      `${API_ENDPOINTS.RESET_PASSWORD}?token=${params.token}&role=${params.role}`,
      formData
    );
    dispatch(resetPasswordSuccess(data));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};

export const deleteUser = (formData) => async (dispatch) => {
  try {
    dispatch(deleteUserRequest());
    const { data } = await apiClient.post(API_ENDPOINTS.DELETE_USER, formData);
    dispatch(deleteUserSuccess(data));
  } catch (error) {
    dispatch(deleteUserFail(error.response.data.message));
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
export const clearAuthSuccess = (dispatch) => {
  dispatch(clearSuccess());
};
