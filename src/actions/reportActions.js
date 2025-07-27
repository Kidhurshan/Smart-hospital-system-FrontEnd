import apiClient from "../constants/apiClient";
import axios from "axios";
import { apiKey, baseURL } from "../constants/apiClient";

import {
  accessHistoriesFail,
  accessHistoriesRequest,
  accessHistoriesSuccess,
  addPatientId,
  allCheckupFail,
  allCheckupRequest,
  allCheckupSuccess,
  allMedicalHistoryFail,
  allMedicalHistoryRequest,
  allMedicalHistorySuccess,
  allMedicalReportsFail,
  allMedicalReportsRequest,
  allMedicalReportsSuccess,
  allTestsFail,
  allTestsRequest,
  allTestsSuccess,
  checkupFail,
  checkupRequest,
  checkupSuccess,
  clearError,
  clearSuccess,
  medicalFail,
  medicalHistoryFail,
  medicalHistoryRequest,
  medicalHistorySuccess,
  medicalRequest,
  medicalSuccess,
  testFail,
  testRequest,
  testSuccess,
} from "../slices/reportSlice";
import { API_ENDPOINTS } from "../constants/endPoints";

export const addMedicalReport = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    dispatch(medicalRequest());
    const { data } = await axios.post(
      `${baseURL}/${API_ENDPOINTS.ADD_MEDICAL_REPORT}`,
      formData,
      config
    );
    dispatch(medicalSuccess(data));
  } catch (error) {
    dispatch(medicalFail(error.response.data.message));
  }
};

export const allMedicalReports = (params) => async (dispatch) => {
  try {
    dispatch(allMedicalReportsRequest());
    const { data } = await apiClient.get(
      `${API_ENDPOINTS.ALL_MEDICAL_REPORT}?patientId=${params.patientId}`
    );

    dispatch(allMedicalReportsSuccess(data));
  } catch (error) {
    dispatch(allMedicalReportsFail(error.response.data.message));
  }
};
export const allTests = (params) => async (dispatch) => {
  try {
    dispatch(allTestsRequest());
    const { data } = await apiClient.get(
      `${API_ENDPOINTS.ALL_TESTS}?patientId=${params.patientId}`
    );

    dispatch(allTestsSuccess(data));
  } catch (error) {
    dispatch(allTestsFail(error.response.data.message));
  }
};
export const allAccessHistories = async (dispatch) => {
  try {
    dispatch(accessHistoriesRequest());
    const { data } = await apiClient.get(API_ENDPOINTS.ACCESS_HISTORIES);

    dispatch(accessHistoriesSuccess(data));
  } catch (error) {
    dispatch(accessHistoriesFail(error.response.data.message));
  }
};

export const addMedicalHistory = (formData) => async (dispatch) => {
  try {
    dispatch(medicalHistoryRequest());
    const { data } = await apiClient.post(
      API_ENDPOINTS.ADD_MEDICAL_HISTORY,
      formData
    );
    dispatch(medicalHistorySuccess(data));
  } catch (error) {
    dispatch(medicalHistoryFail(error.response.data.message));
  }
};

export const addTest = (formData) => async (dispatch) => {
  try {
    dispatch(testRequest());
    const { data } = await apiClient.post(
      API_ENDPOINTS.ADD_TEST,
      formData
    );
    dispatch(testSuccess(data));
  } catch (error) {
    dispatch(testFail(error.response.data.message));
  }
};

export const allMedicalHistory = (params) => async (dispatch) => {
  try {
    dispatch(allMedicalHistoryRequest());
    const { data: disease } = await apiClient.get(
      `${API_ENDPOINTS.ALL_MEDICAL_HISTORY}?patientId=${params.patientId}&type=disease`
    );
    const { data: surgical } = await apiClient.get(
      `${API_ENDPOINTS.ALL_MEDICAL_HISTORY}?patientId=${params.patientId}&type=surgical`
    );

    const data = {
      disease,
      surgical,
    };
    dispatch(allMedicalHistorySuccess(data));
  } catch (error) {
    dispatch(allMedicalHistoryFail(error.response.data.message));
  }
};

export const allCheckups = (params) => async (dispatch) => {
  try {
    dispatch(allCheckupRequest());
    const { data } = await apiClient.get(
      `${API_ENDPOINTS.ALL_CHECKUP}?patientId=${params.patientId}`
    );

    dispatch(allCheckupSuccess(data));
  } catch (error) {
    dispatch(allCheckupFail(error.response.data.message));
  }
};

export const addCheckup = (formData) => async (dispatch) => {
  try {
    dispatch(checkupRequest());
    const { data } = await apiClient.post(API_ENDPOINTS.ADD_CHECKUP, formData);
    dispatch(checkupSuccess(data));
  } catch (error) {
    dispatch(checkupFail(error.response.data.message));
  }
};

export const addNewPatientId = (patientId) => (dispatch) => {
  dispatch(addPatientId(patientId));
};
export const clearNewPatientId = (dispatch) => {
  dispatch(clearNewPatientId());
};
export const clearReportError = (dispatch) => {
  dispatch(clearError());
};
export const clearReportSuccess = (dispatch) => {
  dispatch(clearSuccess());
};
