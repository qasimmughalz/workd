import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';
import fetcher from '../../service/SWRFetcher';
import useSWR from 'swr';
import { useState } from 'react';
import { SelectField } from '../../components/form/SelectField';
import { Form, Formik } from 'formik';
import { SearchField } from '../../components/form/SearchField';

import PlusIcon from '../../public/icons/plus.svg';
import { Button } from '../../components/Button';
import { useRouter } from 'next/router';
import { PageHeader } from '../../components/PageHeader';
import { TableFilters } from '../../components/TableFilters';

const SocietyFilters = ({ data }) => {
  const initialValues = {
    societyName: '',
    legalStatus: '',
    ownerName: '',
    area: '',
    developerCompany: '',
  };

  const getUniqueSocietyNames = () => {
    const names = data.map((item) => item['SOCIETY NAME']);
    const uniqueNames = [...new Set(names)];
    return uniqueNames.map((name) => {
      return {
        value: name,
        label: name,
      };
    });
  };
  const LEGAL_STATUS = [
    { value: 'Certified', label: 'Certified' },
    { value: 'Not Certified', label: 'Not Certified' },
  ];
  return (
    <TableFilters initialValues={initialValues}>
      <SelectField
        placeholder="Society Name"
        name="societyName"
        options={getUniqueSocietyNames()}
      />
      <SelectField placeholder="Legal Status" name="legalStatus" options={LEGAL_STATUS} />
      <SearchField placeholder="Search by owner name" name="ownerName" />
      <SearchField placeholder="Search by area" name="area" />
      <SearchField placeholder="Search by developer company" name="developerCompany" />
    </TableFilters>
  );
};

const SocietyListingPage = () => {
  const router = useRouter();
  const { data, mutate, error } = useSWR('/api/society', fetcher);
  let tableData = null;

  if (data) {
    console.log(data);
    tableData = data.map((item) => {
      return {
        'SOCIETY LOGO': '/societyLogo.png',
        'SOCIETY NAME': item.societyName,
        'SOCIETY ID': item.societyId,
        'CONTACT NO': item.contactNo,
        'OWNER NAME': item.ownerName,
        AREA: item.area,
        'LEGAL STATUS': item.legalStatus,
        // 'DEVELOPER COMPANY NAME': item.developerCompanyName,
        ACTION: String(item.id),
      };
    });
  }

  return (
    <Layout>
      <PageHeader title="Society Management">
        <Button icon={<PlusIcon />} onClick={() => router.push('/society/new')}>
          Add New Society
        </Button>
      </PageHeader>
      {tableData && (
        <div className="">
          {/* <ListingFilter data={tableData} /> */}
          <SocietyFilters data={tableData} stateData={data} />

          <div className="card bg-white mt-4">
            <Table withLinks tableData={tableData} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SocietyListingPage;
