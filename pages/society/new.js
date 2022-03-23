import { Dialog, Listbox, RadioGroup } from '@headlessui/react';
import axios from 'axios';
import { Field, Form, Formik, useField, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ContentLayout } from '../../components/ContentLayout';
import { Layout } from '../../components/Layout';
import { RadioField } from '../../components/form/RadioField';
import { SelectField } from '../../components/form/SelectField';
import { Button } from '../../components/Button';
import { SocietyForm } from '../../components/SocietyForm';
import { PageHeader } from '../../components/PageHeader';

const placeholder = {
  societyName: 'STATE LIFE & CO.',
  societyId: `${Date.now()}`,
  contactNo: '+923318699270',
  ownerName: 'MUHAMMAD WAQAS CHEEMA',
  area: '1000 sqft..',
  legalStatus: 'NOT CERTIFIED',
  developerCompanyName: 'STATE LIFE INSURANCE',
  ownerPhoneNumber: '+9233318699270',
  map: 'https://url/img.jpg',
  latitude: '27.11246',
  longitude: '43.86245',
  type: 'Owner',
  developerCompanyPhone: '+9234579755792',
  developerCompanyEmail: 'info@statelifeinsurance.com',
  developerCompanyAddress: 'Office 15, building D, G-10, Islamabad',
  developerCompanyPhonePreviousProjects: ['Jinnah Garden', 'Soan Garden'],
  ownerPreviousProjects: ['Jinnah Garden', 'Soan Garden'],
};

const AddNewFilePage = () => {
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
  const postForm = async () => {
    await fetch('https://property-expert-backend-prod.herokuapp.com/society', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(placeholder),
    }).then((res) => res.json());
  };

  return (
    <Layout>
      <PageHeader title="Add New Society"></PageHeader>
      <SocietyForm initialValues={initialValues} onSubmit={postForm} />
    </Layout>
  );
};

export default AddNewFilePage;
