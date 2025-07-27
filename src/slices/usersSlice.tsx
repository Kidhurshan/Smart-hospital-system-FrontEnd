import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
  },
  reducers: {
    usersRequest() {
      return {
        loading: true,
      };
    },
    usersSuccess(state, action) {
      return {
        loading: false,
        patients: action.payload.patients,
        staffs: action.payload.staffs,
        doctors: action.payload.doctors,
      };
    },
    usersFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    reasonRequest() {
      return {
        loading: true,
      };
    },
    reasonSuccess(state, action) {
      return {
        loading: false,
        success: action.payload.success,
      };
    },
    reasonFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = usersSlice;

export const {
  usersRequest,
  usersSuccess,
  usersFail,
  reasonFail,
  reasonRequest,
  reasonSuccess,
} = actions;

export default reducer;
