import { Dialog } from '@headlessui/react';
import { Form, Formik } from 'formik';
import CloseIcon from '../public/icons/close.svg';
import { Button } from './Button';
import { RadioField } from './form/RadioField';
import { SelectField } from './form/SelectField';
import { TextField } from './form/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

export const Row = ({ title, children }) => {
  return (
    <div className="card mb-4 p-12">
      {title && <h1 className="text-lg font-semibold mb-8">{title}</h1>}
      <div className="flex items-start gap-x-8 ">{children}</div>
    </div>
  );
};

export const Col = ({ children }) => {
  return <div className="gap-y-4 flex flex-col justify-start h-full w-full">{children}</div>;
};

const SuccessDialog = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const handleOK = () => {
    router.push('/society/SC12252021-0011');
  };
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-20">
      <div className="min-h-screen flex justify-center items-center">
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-30" />

        <div className="bg-white p-8 z-30 w-96 h-72 rounded">
          <div className="flex justify-end mb-12">
            <span className="hover:cursor-pointer" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </span>
          </div>
          <div className="text-center gap-y-4 flex flex-col justify-center items-center ">
            <Dialog.Title>Your product have been added successfully!</Dialog.Title>
            <Dialog.Description>Click OK to view your product</Dialog.Description>
            <Button onClick={handleOK}>OK</Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export const SocietyForm = ({ initialValues, onSubmit }) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const initialValues = {
  //   id: '',
  //   name: '',
  //   phone: '',
  //   email: '',
  //   address: '',
  //   website: '',
  //   type: '',
  //   ownerPhone: '',
  //   ownerPrevProject: '',
  //   legalStatus: '',
  //   area: '',
  //   map: '',
  //   companyName: '',
  //   companyPhone: '',
  //   companyPrevProjects: '',
  //   companyEmail: '',
  //   companyAddress: '',
  // };

  const societySchema = Yup.object().shape({
    id: Yup.string().required('ID is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().required('Email is required'),
    address: Yup.string().required('Address is required'),
    website: Yup.string().required('Website is required'),
    type: Yup.string().required('Type is required'),
    ownerPhone: Yup.string().required('Owner Phone is required'),
    ownerPrevProject: Yup.string().required('Owner Prev Project is required'),
    legalStatus: Yup.string().required('Legal Status is required'),
    area: Yup.string().required('Area is required'),
    map: Yup.string().notRequired(),
    companyName: Yup.string().required('Company Name is required'),
    companyPhone: Yup.string().required('Company Phone is required'),
    companyPrevProjects: Yup.string().required('Company Prev Projects is required'),
    companyEmail: Yup.string().required('Company Email is required'),
    companyAddress: Yup.string().required('Company Address is required'),
  });

  const SOCIETY_TYPES = [
    { value: 'Employee', label: 'Employee' },
    { value: 'Dealer', label: 'Dealer' },
    { value: 'End-User', label: 'End-User' },
  ];
  const LEGAL_STATUS = [
    { name: 'legalTypes', label: 'Certified' },
    { name: 'legalTypes', label: 'Not Certified' },
  ];

  const handleSubmit = async (values) => {
    console.log(values);
    const isValid = await societySchema.isValid(values);
    if (isValid) {
      setIsDialogOpen(true);
    } else {
      console.log('not valid');
    }
    onSubmit();
    // hardcoded for now
    router.push('/society/2');
  };

  return (
    <>
      <SuccessDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={societySchema}
      >
        {({ errors, touched }) => (
          <Form className="">
            <Row title="Society Details">
              <Col>
                <TextField
                  label="Name"
                  name="name"
                  placeholder="Enter Name here"
                  errors={errors.name}
                  touched={touched.name}
                />
                <TextField
                  type="tel"
                  label="Phone No"
                  name="phone"
                  placeholder="Enter phone number here"
                  errors={errors.phone}
                  touched={touched.phone}
                />
              </Col>
              <Col>
              <TextField
                  label="Area"
                  name="area"
                  placeholder="Enter area here"
                  errors={errors.area}
                  touched={touched.area}
                />
              <RadioField
                  label="Legal Status"
                  name="legalStatus"
                  values={LEGAL_STATUS}
                  errors={errors.legalStatus}
                  touched={touched.legalStatus}
                />
                <TextField type="file" label="Map" name="map" placeholder="Enter website here" />
              </Col>
             </Row>

             <Row title="Owner Detial">
              <Col>
              <TextField
                  label="Owner Name"
                  name="name"
                  placeholder="Enter Name here"
                  errors={errors.name}
                  touched={touched.name}
                />
                {/* <SelectField
                  label="Type"
                  placeholder="Select Type"
                  name="type"
                  options={SOCIETY_TYPES}
                  errors={errors.type}
                  touched={touched.type}
                /> */}
                <TextField
                  type="tel"
                  label="Owner Phone No"
                  name="ownerPhone"
                  placeholder="Enter Phone Number here"
                  errors={errors.ownerPhone}
                  touched={touched.ownerPhone}
                />
                <TextField
                  label="Owner Previous Project"
                  name="ownerPrevProject"
                  placeholder="Enter previous projects here (if any)"
                  errors={errors.ownerPrevProject}
                  touched={touched.ownerPrevProject}
                />
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <TextField
                  label="Society ID"
                  name="id"
                  placeholder="Enter Unique ID here"
                  errors={errors.id}
                  touched={touched.id}
                />

                <TextField
                  label="Name"
                  name="name"
                  placeholder="Enter Name here"
                  errors={errors.name}
                  touched={touched.name}
                />
                <TextField
                  type="tel"
                  label="Phone No"
                  name="phone"
                  placeholder="Enter phone number here"
                  errors={errors.phone}
                  touched={touched.phone}
                />
                <TextField
                  label="Email"
                  name="email"
                  placeholder="Enter e-mail address here"
                  errors={errors.email}
                  touched={touched.email}
                />
                <TextField
                  label="Address"
                  name="address"
                  placeholder="Enter address here"
                  errors={errors.address}
                  touched={touched.address}
                />
                <TextField
                  label="Website"
                  name="website"
                  placeholder="Enter website here"
                  errors={errors.website}
                  touched={touched.website}
                />
              </Col>
              <Col>
                <SelectField
                  label="Type"
                  placeholder="Select Type"
                  name="type"
                  options={SOCIETY_TYPES}
                  errors={errors.type}
                  touched={touched.type}
                />
                <TextField
                  type="tel"
                  label="Owner Phone No"
                  name="ownerPhone"
                  placeholder="Enter Phone Number here"
                  errors={errors.ownerPhone}
                  touched={touched.ownerPhone}
                />
                <TextField
                  label="Owner Previous Project"
                  name="ownerPrevProject"
                  placeholder="Enter previous projects here (if any)"
                  errors={errors.ownerPrevProject}
                  touched={touched.ownerPrevProject}
                />
                <RadioField
                  label="Legal Status"
                  name="legalStatus"
                  values={LEGAL_STATUS}
                  errors={errors.legalStatus}
                  touched={touched.legalStatus}
                />
                <TextField
                  label="Area"
                  name="area"
                  placeholder="Enter area here"
                  errors={errors.area}
                  touched={touched.area}
                />
                <TextField type="file" label="Map" name="map" placeholder="Enter website here" />
              </Col>
            </Row> */}
            <Row title="Development Company">
              <Col>
                <TextField
                  label="Company Name"
                  name="companyName"
                  placeholder="Enter Company Name here"
                  errors={errors.companyName}
                  touched={touched.companyName}
                />
                <TextField
                  type="tel"
                  label="Phone"
                  name="companyPhone"
                  placeholder="Enter Phone Number here"
                  errors={errors.companyPhone}
                  touched={touched.companyPhone}
                />
                <TextField
                  label="Previous Projects"
                  name="companyPrevProjects"
                  placeholder="Enter previous projects here (if any)"
                  errors={errors.companyPrevProjects}
                  touched={touched.companyPrevProjects}
                />
              </Col>
              <Col>
                <TextField label="Email" name="companyEmail" placeholder="Enter email here" />
                <div>
                  <TextField
                    label="Address"
                    name="companyAddress"
                    placeholder="Enter address here"
                    as="textarea"
                    errors={errors.companyAddress}
                    touched={touched.companyAddress}
                  />
                  {/* <p className="underline text-blue-800 ml-36 mt-2 text-sm">Choose from map</p> */}
                </div>
              </Col>
            </Row>
            <Row>
              <div className="flex w-full justify-end">
                <Button onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </div>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};
