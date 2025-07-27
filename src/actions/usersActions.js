import apiClient from "../constants/apiClient";
import { reasonFail, reasonRequest, reasonSuccess, usersFail, usersRequest, usersSuccess } from "../slices/usersSlice";
import { API_ENDPOINTS } from "../constants/endPoints";

export const getAllUsers = async (dispatch) => {
  try {
    dispatch(usersRequest());
    const { data:dataPatient } = await apiClient.get(API_ENDPOINTS.ALL_PATIENTS);
    const { data:dataDoctor } = await apiClient.get(API_ENDPOINTS.ALL_DOCTORS);
    const { data: dataStaff } = await apiClient.get(API_ENDPOINTS.ALL_STAFFS);
    
    const data = {
      patients: dataPatient.patients,
      staffs: dataStaff.staffs,
      doctors: dataDoctor.doctors
    }

    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(usersFail(error.response.data.message));
  }
};

export const addReason = (formData) => async (dispatch) => {
  try {
    dispatch(reasonRequest());
    const { data } = await apiClient.post(API_ENDPOINTS.ADD_REASON, formData);
    dispatch(reasonSuccess(data));
  } catch (error) {
    dispatch(reasonFail(error.response.data.message));
  }
}
