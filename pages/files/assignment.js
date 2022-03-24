import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FileFilters } from '../../components/FileFilters';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { Table } from '../../components/Table';
import fetcher from '../../service/SWRFetcher';
import {AllFilesNewHeader} from '../../components/AllFilesNewHeader'

const FileAssignmentPage = () => {
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
      <AllFilesNewHeader/>
      <PageHeader title="File Assignment"></PageHeader>
      <div className="card mb-4">
        <FileFilters />
      </div>
      <div className="card">{tableData && <Table tableData={tableData} />}</div>
    </Layout>
  );
};

export default FileAssignmentPage;
