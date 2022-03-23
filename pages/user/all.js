import useSWR from 'swr';
import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';
import fetcher from '../../service/SWRFetcher';
import { PageHeader } from '../../components/PageHeader';
import { FileFilters } from '../../components/FileFilters';
import { Button } from '../../components/Button';
import PlusIcon from '../../public/icons/plus.svg';

const AllUsersPage = () => {
  const { data, error } = useSWR(
    'https://property-expert-backend-prod.herokuapp.com/user',
    fetcher
  );
  console.log(data);

  let tableData;

  if (data) {
    tableData = data.map((item) => {
      return {
        NAME: item.name,
        EMAIL: item.email,
        PHONE: item.phoneNo,
        'ACCOUNT BALANCE (RS)': '500.000',
        TYPE: 'Marla 5',
        ACTION: item.id,
      };
    });
  }
  return (
    <Layout>
      <PageHeader title="All Users">
        <Button icon={<PlusIcon />} onClick={() => router.push('/user/new')}>
          Add New User
        </Button>
      </PageHeader>
      <FileFilters />
      {tableData && <Table tableData={tableData} />}
    </Layout>
  );
};

export default AllUsersPage;
