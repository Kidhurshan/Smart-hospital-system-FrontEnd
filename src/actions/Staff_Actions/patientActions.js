import {
  registerFail,
  registerRequest,
  registerSuccess,
} from "../../slices/authSlice";
import apiClient from "../../constants/apiClient";
import { API_ENDPOINTS } from "../../constants/endPoints";

export const registerPatient = (formData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const { data } = await apiClient.post(
      API_ENDPOINTS.REGISTER_PATIENT,
      formData
    );

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};
