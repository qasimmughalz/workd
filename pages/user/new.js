import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import { RadioField } from '../../components/form/RadioField';
import { SelectField } from '../../components/form/SelectField';
import { TextField } from '../../components/form/TextField';
import { Layout } from '../../components/Layout';
import { Col, Row, SocietyForm } from '../../components/SocietyForm';
import { PageHeader } from '../../components/PageHeader';

const UserForm = ({ initialValues, handleSubmit }) => {
  const SOCIETY_TYPES = [
    { value: 'Employee', label: 'Employee' },
    { value: 'Dealer', label: 'Dealer' },
    { value: 'End-User', label: 'End-User' },
  ];
  const LEGAL_STATUS = [
    { name: 'platinumUser', label: 'Certified' },
    { name: 'goldUser', label: 'Gold User' },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="">
          <Row>
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
                label="Company"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
              <TextField
                label="Email"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
              <TextField
                label="Phone"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
              <RadioField
                label="Badge"
                name="legalStatus"
                values={LEGAL_STATUS}
                errors={errors.legalStatus}
                touched={touched.legalStatus}
              />
            </Col>
            <Col>
              <TextField
                label="Name"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
              <TextField
                label="CNIC"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
              <TextField
                label="Password"
                name="id"
                placeholder=""
                errors={errors.id}
                touched={touched.id}
              />
            </Col>
          </Row>
          <Row>
            <TextField
              label="Address"
              name="id"
              placeholder=""
              errors={errors.id}
              touched={touched.id}
            />
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
  );
};

const AddNewUserPage = () => {
  const router = useRouter();
  const initialValues = {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    type: '',
    ownerPhone: '',
    ownerPrevProject: '',
    legalStatus: '',
    area: '',
    map: '',
    companyName: '',
    companyPhone: '',
    companyPrevProjects: '',
    companyEmail: '',
    companyAddress: '',
  };
  const handleSubmit = () => {
    router.push('/user/all');
  };
  return (
    <Layout>
      <PageHeader title="Add New User" />
      <UserForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default AddNewUserPage;
