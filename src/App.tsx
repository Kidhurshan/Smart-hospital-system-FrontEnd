import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import PatientSignIn from "./pages/AuthPages-patient/SignIn.js";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import Resetpassword from "./pages/AuthPages/ResetPassword";
import { ScrollToTop } from "./components/common_components/ScrollToTop";

// ==============================
// Doctor Imports & Routess
// ==============================
import Doctor_AppLayout from "./layout/Doctor_Layout/AppLayout";
import Doctor_NotFound from "./pages/Doctor/NotFound";
import Doctor_UserProfiles from "./pages/Doctor/User Profile/doctor_profile";
import Doctor_Videos from "./pages/Doctor/Not Using/UiElements/Videos";
import Doctor_Images from "./pages/Doctor/Not Using/UiElements/Images";
import Doctor_Alerts from "./pages/Doctor/Not Using/UiElements/Alerts";
import Doctor_Badges from "./pages/Doctor/Not Using/UiElements/Badges";
import Doctor_Avatars from "./pages/Doctor/Not Using/UiElements/Avatars";
import Doctor_Buttons from "./pages/Doctor/Not Using/UiElements/Buttons";
import Doctor_Calendar from "./pages/Doctor/Treatment Plan/Calendar";
import Doctor_BasicTables from "./pages/Doctor/Patient_Record/Table_PatientList";
import Doctor_FormElements from "./pages/Doctor/Not Using/Forms/FormElements";
import Doctor_Popup_Records from "./pages/Doctor/Patient_Record/PatientPopupPage";
import Doctor_Patient_Past_Medical_History from "./pages/Doctor/Patient_Record/PatientPastMedicalHistory";
import Doctor_Patient_Analytics from "./pages/Doctor/Patient_Record/PatientAnalytics";
import Doctor_Patient_Reports from "./pages/Doctor/Patient_Record/PatientMedicalReports";
import Doctor_Patient_CheckupForm from "./pages/Doctor/Patient_Record/PatientCheckup";
import Doctor_Patient_Medical_Tests from "./pages/Doctor/Patient_Record/PatientMedicalTests";
import Doctor_Home from "./pages/Doctor/Home/Home";
import EditProfile_Doctor from "./pages/Doctor/User Profile/doctor_edit_profile";

// ==============================
// MA Imports & Routes
// ==============================
import MA_AppLayout from "./layout/MA_Layout/AppLayout";
import MA_NotFound from "./pages/MA/NotFound";
import MA_UserProfiles from "./pages/MA/UserProfile/ma_profile";
import MA_Videos from "./pages/MA/not using/UiElements/Videos";
import MA_Images from "./pages/MA/not using/UiElements/Images";
import MA_Alerts from "./pages/MA/not using/UiElements/Alerts";
import MA_Badges from "./pages/MA/not using/UiElements/Badges";
import MA_Avatars from "./pages/MA/not using/UiElements/Avatars";
import MA_Buttons from "./pages/MA/not using/UiElements/Buttons";
import MA_Calendar from "./pages/MA/not using/Calendar";
import MA_BasicTables_doctor from "./pages/MA/UserManagement/Table_doctor";
import MA_BasicTables_staff from "./pages/MA/UserManagement/Table_staff";
import MA_BasicTables_patient from "./pages/MA/UserManagement/Table_patient";
import MA_FormEditPatient from "./pages/MA/UserManagement/Edit Form/Form_EditPatient";
import MA_FormEditDoctor from "./pages/MA/UserManagement/Edit Form/Form_EditDoctor";
import MA_FormEditStaff from "./pages/MA/UserManagement/Edit Form/Form_EditStaff";
import MA_FormRegisterDoctor from "./pages/MA/UserManagement/Register Form/Form_RegisterDoctor";
import MA_FormRegisterStaff from "./pages/MA/UserManagement/Register Form/Form_RegisterStaff";
import MA_Blank from "./pages/MA/not using/Blank";
import MA_Home from "./pages/MA/Home/Home";
import EditProfile_MA from "./pages/MA/UserProfile/ma_edit_profile";
import MA_AccessHistory from "./pages/MA/History/Table_AccessHistory";
import MA_ReportHistory from "./pages/MA/History/Table_ReportHistory";

// ==============================
// Staff Imports & Routes
// ==============================
import Staff_AppLayout from "./layout/Staff_Layout/AppLayout";
import Staff_NotFound from "./pages/Staff/NotFound";
import Staff_UserProfiles from "./pages/Staff/User Profile/staff_profile";
import Staff_Videos from "./pages/Staff/Not Use/UiElements/Videos";
import Staff_Images from "./pages/Staff/Not Use/UiElements/Images";
import Staff_Alerts from "./pages/Staff/Not Use/UiElements/Alerts";
import Staff_Badges from "./pages/Staff/Not Use/UiElements/Badges";
import Staff_Avatars from "./pages/Staff/Not Use/UiElements/Avatars";
import Staff_Buttons from "./pages/Staff/Not Use/UiElements/Buttons";
import Staff_Calendar from "./pages/Staff/Medical treatment/Calendar";
import Staff_BasicTables from "./pages/Staff/Not Use/Tables/BasicTables";
import Staff_FormElements from "./pages/Staff/Not Use/Forms/FormElements";
import Staff_Blank from "./pages/Staff/Not Use/Blank";
import Staff_Home from "./pages/Staff/Home/Home";
import EditProfile_Staff from "./pages/Staff/User Profile/staff_edit_profile";
import Register_Patient from "./pages/Staff/Patient Register/Form_RegisterPatient";
import Assiging_Report_table from "./pages/Staff/Assign Report/Table_patient";
import Assigning_Report_form from "./pages/Staff/Assign Report/Form_AssigningReport";

// ==============================
// Patient Imports & Routes
// ==============================
import Patient_AppLayout from "./layout/Patient_Layout/AppLayout";
import Patient_NotFound from "./pages/Patient/NotFound";
import Patient_UserProfiles from "./pages/Patient/User Profile/patient_profile";
import Patient_Videos from "./pages/Patient/not use/UiElements/Videos";
import Patient_Images from "./pages/Patient/not use/UiElements/Images";
import Patient_Alerts from "./pages/Patient/not use/UiElements/Alerts";
import Patient_Badges from "./pages/Patient/not use/UiElements/Badges";
import Patient_Avatars from "./pages/Patient/not use/UiElements/Avatars";
import Patient_Buttons from "./pages/Patient/not use/UiElements/Buttons";
import Patient_Calendar from "./pages/Patient/Treatment plan/Calendar";
import Patient_BasicTables from "./pages/Patient/Reports/Table_ReportList";
import Patient_FormElements from "./pages/Patient/not use/Forms/FormElements";
import Patient_Home from "./pages/Patient/Home/Home";
import EditProfile_Patient from "./pages/Patient/User Profile/patient_edit_profile";
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./actions/authActions.js";
import { getAllUsers } from "./actions/usersActions.js";
import { PatientProvider } from "./context/PatientContext.js";
import ForgotResetPasswordForm from "./components/auth_components/ForgotResetPassword.js";
import ForgotResetPassword from "./components/auth_components/ForgotResetPassword.js";
import ForgotLinkSent from "./pages/AuthPages/ForgotLinkSent";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser);
    store.dispatch(getAllUsers);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Redirect root to the SignIn page */}
        <Route path="/" element={<Navigate to="/signin" replace />} />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/patient/signin" element={<PatientSignIn />} />
        <Route path="/reset_password" element={<Resetpassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:id" element={<ForgotResetPassword />} />
        <Route path="/forgot_password_success" element={<ForgotLinkSent />} />

        {/*
          ======================================
          Doctor Routes - Uncomment to test Doctor
          ======================================
         */}
        <Route element={<Doctor_AppLayout />}>
            <Route path="/doctor_home" element={<Doctor_Home />} />
            <Route path="/doctor_profile" element={<Doctor_UserProfiles />} />
            <Route
              path="/doctor_edit_profile"
              element={<EditProfile_Doctor />}
            />
            <Route path="/doctor_calendar" element={<Doctor_Calendar />} />
            <Route
              path="/patient_PopupPage"
              element={<Doctor_Popup_Records />}
            />
            <Route
              path="/patient_recordPage/medicalPastHistory"
              element={<Doctor_Patient_Past_Medical_History />}
            />
            <Route
              path="/patient_recordPage/analytics"
              element={<Doctor_Patient_Analytics />}
            />
            <Route
              path="/patient_recordPage/medicalReports"
              element={<Doctor_Patient_Reports />}
            />
            <Route
              path="/patient_recordPage/checkupForm"
              element={<Doctor_Patient_CheckupForm />}
            />
            <Route
              path="/patient_recordPage/medicalTests"
              element={<Doctor_Patient_Medical_Tests />}
            />
            <Route path="/doctor_form" element={<Doctor_FormElements />} />
            <Route path="/doctor_tables" element={<Doctor_BasicTables />} />
            <Route path="/alerts" element={<Doctor_Alerts />} />
            <Route path="/avatars" element={<Doctor_Avatars />} />
            <Route path="/badge" element={<Doctor_Badges />} />
            <Route path="/buttons" element={<Doctor_Buttons />} />
            <Route path="/images" element={<Doctor_Images />} />
            <Route path="/videos" element={<Doctor_Videos />} />
            <Route path="/doctor_notfound" element={<Doctor_NotFound />} />
          </Route>

        {/* 
          ======================================
          MA Routes - Uncomment to test MA
          ======================================
          */}
        <Route element={<MA_AppLayout />}>
          <Route path="/ma_home" element={<MA_Home />} />
          <Route path="/ma_profile" element={<MA_UserProfiles />} />
          <Route path="/ma_edit_profile" element={<EditProfile_MA />} />
          <Route path="/ma_calendar" element={<MA_Calendar />} />
          <Route path="/ma_blank" element={<MA_Blank />} />
          <Route
            path="/ma_form_edit_patient"
            element={<MA_FormEditPatient />}
          />
          <Route path="/ma_form_edit_doctor" element={<MA_FormEditDoctor />} />
          <Route path="/ma_form_edit_staff" element={<MA_FormEditStaff />} />
          <Route
            path="/ma_form_Register_doctor"
            element={<MA_FormRegisterDoctor />}
          />
          <Route
            path="/ma_form_Register_staff"
            element={<MA_FormRegisterStaff />}
          />
          <Route path="/ma_tables_doctor" element={<MA_BasicTables_doctor />} />
          <Route path="/ma_tables_staff" element={<MA_BasicTables_staff />} />
          <Route
            path="/ma_tables_patient"
            element={<MA_BasicTables_patient />}
          />
          <Route path="/ma_access_history" element={<MA_AccessHistory />} />
          <Route path="/ma_report_history" element={<MA_ReportHistory />} />
          <Route path="/ma_alerts" element={<MA_Alerts />} />
          <Route path="/ma_avatars" element={<MA_Avatars />} />
          <Route path="/ma_badge" element={<MA_Badges />} />
          <Route path="/ma_buttons" element={<MA_Buttons />} />
          <Route path="/ma_images" element={<MA_Images />} />
          <Route path="/ma_videos" element={<MA_Videos />} />
          <Route path="/ma_notfound" element={<MA_NotFound />} />
        </Route>

        {/* 
          ======================================
          Staff Routes - Uncomment to test Staff
          ======================================
        */}
        <Route element={<Staff_AppLayout />}>
          <Route path="/staff_home" element={<Staff_Home />} />
          <Route path="/staff_profile" element={<Staff_UserProfiles />} />
          <Route path="/staff_edit_profile" element={<EditProfile_Staff />} />
          <Route
            path="/staff_patient_register"
            element={<Register_Patient />}
          />
          <Route
            path="/staff_assign_report_table"
            element={<Assiging_Report_table />}
          />
          <Route
            path="/staff_assign_report_form"
            element={<Assigning_Report_form />}
          />
          <Route path="/staff_calendar" element={<Staff_Calendar />} />
          <Route path="/staff_blank" element={<Staff_Blank />} />
          <Route path="/staff_form" element={<Staff_FormElements />} />
          <Route path="/staff_tables" element={<Staff_BasicTables />} />
          <Route path="/staff_alerts" element={<Staff_Alerts />} />
          <Route path="/staff_avatars" element={<Staff_Avatars />} />
          <Route path="/staff_badge" element={<Staff_Badges />} />
          <Route path="/staff_buttons" element={<Staff_Buttons />} />
          <Route path="/staff_images" element={<Staff_Images />} />
          <Route path="/staff_videos" element={<Staff_Videos />} />
          <Route path="/staff_notfound" element={<Staff_NotFound />} />
        </Route>

        {/*
          ======================================
          Patient Routes - Uncomment to test Patient
          ======================================
        */}
        <Route element={<Patient_AppLayout />}>
          <Route path="/patient_home" element={<Patient_Home />} />
          <Route path="/patient_profile" element={<Patient_UserProfiles />} />
          <Route
            path="/patient_edit_profile"
            element={<EditProfile_Patient />}
          />
          <Route path="/patient_calendar" element={<Patient_Calendar />} />
          <Route path="/patient_form" element={<Patient_FormElements />} />
          <Route path="/patient_tables" element={<Patient_BasicTables />} />
          <Route path="/patient_alerts" element={<Patient_Alerts />} />
          <Route path="/patient_avatars" element={<Patient_Avatars />} />
          <Route path="/patient_badge" element={<Patient_Badges />} />
          <Route path="/patient_buttons" element={<Patient_Buttons />} />
          <Route path="/patient_images" element={<Patient_Images />} />
          <Route path="/patient_videos" element={<Patient_Videos />} />
          <Route path="/patient_notfound" element={<Patient_NotFound />} />
        </Route>

        {/* Global fallback route (optional) */}
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
