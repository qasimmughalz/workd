import useSWR from 'swr';
import { Button } from '../../components/Button';
import { PageHeader } from '../../components/PageHeader';
import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';
import fetcher from '../../service/SWRFetcher';
import PlusIcon from '../../public/icons/plus.svg';
import { useRouter } from 'next/router';
import { TableFilters } from '../../components/TableFilters';
import { TextField } from '../../components/form/TextField';
import { SelectField } from '../../components/form/TextField';
import {AllFilesNewHeader} from '../../components/AllFilesNewHeader'

const FileFilters = () => {
  return (
    <TableFilters>
      <div className="flex divide-x-2 gap-x-4">
        <div className="flex gap-x-4">
          <TextField placeholder="Project Name" />
          <TextField placeholder="Status" />
          <TextField placeholder="Type" />
        </div>
        <div className="flex pl-2">
          <button className="underline">Show advanced filters</button>
        </div>
      </div>
    </TableFilters>
  );
};

const AllFilesPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  const { data, error } = useSWR(
    'https://property-expert-backend-prod.herokuapp.com/plot-files',
    fetcher
  );
  let tableData;

  if (data) {
    tableData = data.map((item) => {
      return {
        'FILE NO': item.fileNo,
        'FILE SECURITY': item.fileSecurityNo,
        'FILE OWNER': `Muhammad Waqas
            Cheema`,
        'CREATED DATE': item.createdAt,
        'ASSIGNED DATE': item.assignedDate,
        'PROJECT NAME': item.projectName,
        'PRICE (RS)': item.unitPrice,
        STATUS: 'STATUS',
        ACTION: String(item.id),
      };
    });
  }
  return (
    <Layout>
      <AllFilesNewHeader>
        <Button icon={<PlusIcon />} onClick={() => router.push('/files/new')}>
          Add New File
        </Button>
      </AllFilesNewHeader>
      <div className="card mb-4">
        <FileFilters />
      </div>
      <div className="card">{data && <Table tableData={tableData} />}</div>
    </Layout>
  );
};

export default AllFilesPage;
