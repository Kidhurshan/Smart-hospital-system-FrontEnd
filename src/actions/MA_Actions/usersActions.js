import apiClient from "../../constants/apiClient";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { registerFail, registerRequest, registerSuccess } from "../../slices/authSlice"

export const registerDoctor = (formData) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const { data } = await apiClient.post(API_ENDPOINTS.REGISTER_DOCTOR, formData);
        console.log(`DATA ::: ${data}`);
        dispatch(registerSuccess(data));
    } catch (error) {
        dispatch(registerFail(error.response.data.message));
    }
}

export const registerStaff = (formData) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const { data } = await apiClient.post(API_ENDPOINTS.REGISTER_STAFF, formData);
        console.log(`DATA ::: ${data}`);
        dispatch(registerSuccess(data));
    } catch (error) {
        dispatch(registerFail(error.response.data.message));
    }
}