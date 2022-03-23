import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Button } from './Button';
import { RadioField } from './form/RadioField';
import { SelectField } from './form/SelectField';
import { TextField } from './form/TextField';
import { useRouter } from 'next/router';

const MyForm = ({ title, children, onSubmit, onBack, submitText, initialValues }) => {
  return (
    <div className="mx-auto w-full">
      <Formik initialValues={initialValues}>
        <Form className=" mx-auto w-full lg:max-w-screen-sm bg-white flex flex-col gap-y-4 border rounded-md shadow overflow-hidden">
          <div className="">
            <h3 className="text-lg border-b p-5">{title}</h3>
            <div className="p-5 flex flex-col gap-y-4">{children}</div>
          </div>

          <div className="bg-gray-50 p-5 flex w-full justify-end">
            {onBack && (
              <span className="mr-4">
                <Button color="black" onClick={onBack}>
                  Back
                </Button>
              </span>
            )}
            <Button onClick={onSubmit}>{submitText ? submitText : 'Submit'}</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const BasicInfoForm = ({ handleClick, initialValues }) => {
  const FILE_TYPES = [
    {
      value: 'testing',
    },
  ];
  const STATUS_VALUES = [
    { label: 'Sold', value: 'sold' },
    { label: 'Reserved', value: 'reserved' },
    { label: 'Available', value: 'available' },
  ];
  return (
    <MyForm
      title="Basic Information"
      submitText="Next"
      onSubmit={handleClick}
      initialValues={initialValues}
    >
      <TextField label="File Number" name="fileNo" />
      <TextField label="Security Code" name="securityCode" />
      <SelectField label="Type" name="type" options={FILE_TYPES} />
      <RadioField label="Status" name="status" values={STATUS_VALUES} />
      <TextField label="Project Name" name="projectName" />
    </MyForm>
  );
};
const InitialAssignmentForm = ({ handleClick, handleClickBack, initialValues }) => {
  return (
    <MyForm
      title="Initial Assignment"
      submitText="Next"
      onSubmit={handleClick}
      onBack={handleClickBack}
      initialValues={initialValues}
    >
      <TextField label="Assigned To" name="assignedTo" />
      <TextField label="Assignment Date" name="assignmentDate" />
    </MyForm>
  );
};
const Pricing = ({ handleClick, handleClickBack, initialValues }) => {
  return (
    <MyForm
      title="Initial Assignment"
      submitText="Submit"
      onSubmit={handleClick}
      onBack={handleClickBack}
      initialValues={initialValues}
    >
      <TextField label="Unit Price" name="unitPrice" />
      <div className="flex w-full justify-between flex-1">
        <TextField label="Minimum Deposit" name="minimumDeposit" />
        <TextField label="Percentage" name="percentage" />
      </div>
      <TextField label="Notes / Comments" name="notes" />
    </MyForm>
  );
};

const StepItem = ({ step, text, currentStep }) => {
  return (
    <li className="flex items-center">
      <span
        className={`p-2  rounded-md w-10 h-10 flex justify-center items-center ${
          step === currentStep ? 'bg-primary text-white' : 'bg-gray-200'
        }`}
      >
        {step}
      </span>
      <span className={`ml-2 ${step === currentStep ? 'text-gray-900' : ''}`}>{text}</span>
    </li>
  );
};

export const FilesForm = ({
  initialValuesBasicInformation,
  initialValuesAssignment,
  initialValuesPricing,
}) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleClickNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleClickBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleClickSubmit = () => {
    console.log('submit');
    // HARDCODED FOR NOW
    router.push('/files/445');
  };
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoForm
            handleClick={handleClickNext}
            initialValues={initialValuesBasicInformation}
          />
        );
      case 2:
        return (
          <InitialAssignmentForm
            initialValues={initialValuesAssignment}
            handleClick={handleClickNext}
            handleClickBack={handleClickBack}
          />
        );
      case 3:
        return (
          <Pricing
            initialValues={initialValuesPricing}
            handleClick={handleClickSubmit}
            handleClickBack={handleClickBack}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="mx-auto w-full py-8">
        <ul className="flex items-center justify-center gap-x-8 font-semibold text-gray-600">
          <StepItem step={1} text="Basic Information" currentStep={currentStep} />
          <StepItem step={2} text="Initial Assignment" currentStep={currentStep} />
          <StepItem step={3} text="Pricing" currentStep={currentStep} />
        </ul>
      </div>

      {renderCurrentStep()}
    </div>
  );
};
