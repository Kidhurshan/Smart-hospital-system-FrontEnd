import PageBreadcrumb from "../../../../components/common_components/PageBreadCrumb";
import DefaultInputs from "../../../../components/common_components/form_components/form-elements/DefaultInputs";
import InputGroup from "../../../../components/common_components/form_components/form-elements/InputGroup";
import DropzoneComponent from "../../../../components/common_components/form_components/form-elements/DropZone";
import CheckboxComponents from "../../../../components/common_components/form_components/form-elements/CheckboxComponents";
import RadioButtons from "../../../../components/common_components/form_components/form-elements/RadioButtons";
import ToggleSwitch from "../../../../components/common_components/form_components/form-elements/ToggleSwitch";
import FileInputExample from "../../../../components/common_components/form_components/form-elements/FileInputExample";
import SelectInputs from "../../../../components/common_components/form_components/form-elements/SelectInputs";
import TextAreaInput from "../../../../components/common_components/form_components/form-elements/TextAreaInput";
import InputStates from "../../../../components/common_components/form_components/form-elements/InputStates";
import PageMeta from "../../../../components/common_components/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}
