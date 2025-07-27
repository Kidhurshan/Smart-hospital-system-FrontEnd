import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    loading: false,
  },
  reducers: {
    medicalRequest() {
      return {
        loading: true,
      };
    },
    medicalSuccess(state, action) {
      return {
        loading: false,
        success: action.payload.success,
      };
    },
    medicalFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    testRequest() {
      return {
        loading: true,
      };
    },
    testSuccess(state, action) {
      return {
        loading: false,
        success: action.payload.success,
      };
    },
    testFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    allMedicalReportsRequest() {
      return {
        loading: true,
      };
    },
    allMedicalReportsSuccess(state, action) {
      return {
        loading: false,
        medicalReports: action.payload.medicalReports
      };
    },
    allMedicalReportsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    allTestsRequest() {
      return {
        loading: true,
      };
    },
    allTestsSuccess(state, action) {
      return {
        loading: false,
        tests: action.payload.tests
      };
    },
    allTestsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    accessHistoriesRequest() {
      return {
        loading: true,
      };
    },
    accessHistoriesSuccess(state, action) {
      return {
        loading: false,
        accessHistories: action.payload.accessHistories
      };
    },
    accessHistoriesFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    checkupRequest() {
      return {
        loading: true,
      };
    },
    checkupSuccess(state, action) {
      return {
        loading: false,
        success: action.payload.success,
      };
    },
    checkupFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    allCheckupRequest() {
      return {
        loading: true,
      };
    },
    allCheckupSuccess(state, action) {
      return {
        loading: false,
        checkups: action.payload.checkups,
      };
    },
    allCheckupFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    medicalHistoryRequest() {
      return {
        loading: true,
      };
    },
    medicalHistorySuccess(state, action) {
      return {
        loading: false,
        success: action.payload.success,
      };
    },
    medicalHistoryFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    allMedicalHistoryRequest() {
      return {
        loading: true,
      };
    },
    allMedicalHistorySuccess(state, action) {
      return {
        loading: false,
        diseaseHistories: action.payload.disease.medicalHistories,
        surgicalHistories: action.payload.surgical.medicalHistories,
      };
    },
    allMedicalHistoryFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
    addPatientId(state, action) {
      return {
        ...state,
        patientId: action.payload
      }
    },
    clearPatientId(state) {
      return {
        ...state,
        patientId: null
      }
    },
    clearError(state) {
      return {
        ...state,
        error: null,
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

const { actions, reducer } = reportSlice;

export const {
  checkupRequest,
  checkupSuccess,
  clearError,
  checkupFail,
  medicalHistoryFail,
  medicalHistoryRequest,
  medicalHistorySuccess,
  allMedicalHistoryFail,
  allMedicalHistoryRequest,
  allMedicalHistorySuccess,
  clearPatientId,
  addPatientId,
  allCheckupFail,
  allCheckupRequest,
  allCheckupSuccess,
  medicalFail,
  medicalRequest,
  medicalSuccess,
  clearSuccess,
  allMedicalReportsFail,
  allMedicalReportsRequest,
  allMedicalReportsSuccess,
  accessHistoriesFail,
  accessHistoriesRequest,
  accessHistoriesSuccess,
  testRequest,
  testSuccess,
  testFail,
  allTestsFail,
  allTestsRequest,
  allTestsSuccess
} = actions;

export default reducer;
