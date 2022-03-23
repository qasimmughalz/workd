import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { TextField } from '../../components/form/TextField';
import { SelectField } from '../../components/form/SelectField';
import { RadioField } from '../../components/form/RadioField';
import { Button } from '../../components/Button';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FilesForm } from '../../components/FilesForm';

const NewFilePage = () => {
  const initialValuesBasicInformation = {
    fileNo: 'testing',
    securityCode: '',
    type: '',
    status: '',
    projectName: '',
  };
  const initialValuesAssignment = {
    assignedTo: '',
    assignmentDate: '',
  };
  const initialValuesPricing = {
    unitPrice: '',
    minimumDeposit: '',
    percentage: '',
    notes: '',
  };
  return (
    <Layout>
      <PageHeader title="Add New File"></PageHeader>
      <FilesForm
        initialValuesBasicInformation={initialValuesBasicInformation}
        initialValuesAssignment={initialValuesAssignment}
        initialValuesPricing={initialValuesPricing}
      />
    </Layout>
  );
};

export default NewFilePage;
