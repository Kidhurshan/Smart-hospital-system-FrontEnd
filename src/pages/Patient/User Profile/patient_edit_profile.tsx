import { useState, useRef, useEffect } from "react";
import Button from "../../../components/common_components/ui_components/button/Button";
import Input from "../../../components/common_components/form_components/input/InputField";
import Label from "../../../components/common_components/form_components/Label";
import { Link, useNavigate } from "react-router";
import { CheckCircleIcon, AlertIcon, CalenderIcon } from "../../../icons";
import Select from "../../../components/common_components/form_components/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  clearAuthError,
  loadUser,
} from "../../../actions/authActions";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../../constants/appRoutes";
import Flatpickr from "react-flatpickr";

export default function EditProfile() {
  const { user, error, success } = useSelector((state) => state.authState);

  const username = user?.name ?? "";
  const address = user?.address ?? "";
  const nic = user?.nic ?? "";
  const dob = user?.dob ?? "";
  const sex = user?.sex ?? "";
  const email = user?.email ?? "";
  const role = user?.role ?? "";
  const phone = user?.phone ?? "";
  const yearOfExperience = user?.yearOfExperience ?? "";

  // State to manage the current profile picture preview
  const [profilePicture, setProfilePicture] = useState(
    "/images/user/owner.jpg"
  );
  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  //select the gender
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  const options = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  const [formData, setFormData] = useState({
    name: username,
    sex: sex,
    dob: dob,
    nic: nic,
    address: address,
    yearOfExperience: yearOfExperience,
    email: email,
    phone: phone,
    // Optionally store the file itself to send to your API.
    profilePicture: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (feild, value) => {
    setFormData({ ...formData, [feild]: value });
  };

  // Update profile picture when a new file is selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfilePicture(previewUrl);
      // Optionally, store the file in formData if you need to send it to your API
      setFormData((prev) => ({ ...prev, profilePicture: file }));
    }
  };

  // Trigger the hidden file input when clicking the image container
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
    console.log("Saving profile...", formData);
  };

  useEffect(() => {
    if (error) {
      const er = error.split(",");
      console.log(error);
      toast(er.length > 1 ? "Please fill all the fields" : error, {
        type: "error",
        position: "bottom-center",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    } else if (success) {
      toast("Profile successfully updated", {
        type: "success",
        position: "bottom-center",
      });
      navigate(APP_ROUTES.PATIENT_PROFILE);
      dispatch(loadUser);
      return;
    }
  }, [error, success, dispatch, navigate]);
  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl bg-white p-6 rounded-3xl shadow-lg dark:bg-gray-800">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Edit Personal Information
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Update your details to keep your profile up-to-date.
          </p>
        </div>
        <form onSubmit={handleSave} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="relative w-20 h-20 flex items-center justify-center overflow-hidden border border-gray-200 rounded-full dark:border-gray-800 cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Overlay icon */}
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 113.536 3.536L7 21H3v-4L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
            <div>
              <Label>Gender</Label>
              <Select
                options={options}
                placeholder="Select an option"
                onChange={(e) => handleChange("sex", e)}
                className="dark:bg-dark-900"
                defaultValue={formData.sex}
              />
            </div>
            <div>
              <Label htmlFor="NIC">NIC</Label>
              <Input
                id="NIC"
                name="NIC"
                type="text"
                placeholder="Enter your NIC"
                value={formData.nic}
                onChange={(e) => handleChange("nic", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                disabled
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dob">Date Of Birth</Label>
              <div className="relative w-full flatpickr-wrapper">
                <Flatpickr
                  value={formData.dob}
                  options={{ dateFormat: "Y-m-d" }}
                  onChange={(e) =>
                    handleChange("dob", e[0].toISOString().split("T")[0])
                  }
                  placeholder="Select an option"
                  className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
                />
                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                  <CalenderIcon className="size-6" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link to="/patient_profile">
              <div className="flex items-center gap-5">
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<AlertIcon className="size-5" />}
                >
                  Cancel
                </Button>
              </div>
            </Link>
            <div className="flex items-center gap-5">
              <Button
                size="sm"
                variant="outline"
                startIcon={<CheckCircleIcon className="size-5" />}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
