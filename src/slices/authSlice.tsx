import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isAuthenticated: false,
  },
  reducers: {
    loginRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    loginSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },
    loginFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    registerRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    registerSuccess(state, action) {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    },

    registerFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    editProfileRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    editProfileSuccess(state, action) {
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };
    },

    editProfileFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    chnagePasswordRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    chnagePasswordSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
      };
    },

    chnagePasswordFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    deleteUserRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    deleteUserSuccess(state, action) {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    },

    deleteUserFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    resetPasswordRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    resetPasswordSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },

    resetPasswordFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    loadUserRequest(state) {
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    },

    loadUserSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    },

    loadUserFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    logoutSuccess() {
      return {
        loading: false,
        isAuthenticated: false,
      };
    },

    logoutFail(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },

    forgotPasswordRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },
    forgotPasswordSuccess(state) {
      return {
        ...state,
        loading: false,
        success: true,
      };
    },
    forgotPasswordFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    clearError(state) {
      return {
        ...state,
        error: null,
      };
    },
    clearMessage(state) {
      return {
        ...state,
        message: null,
      };
    },
    clearSuccess(state) {
      return {
        ...state,
        success: null,
      };
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  clearError,
  logoutFail,
  logoutSuccess,
  registerRequest,
  registerSuccess,
  registerFail,
  clearMessage,
  editProfileRequest,
  editProfileSuccess,
  editProfileFail,
  chnagePasswordFail,
  chnagePasswordRequest,
  chnagePasswordSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  clearSuccess,
  deleteUserFail,
  deleteUserRequest,
  deleteUserSuccess,
} = actions;

export default reducer;
