import { FilesForm } from '../../../components/FilesForm';
import { Layout } from '../../../components/Layout';
import { PageHeader } from '../../../components/PageHeader';

const EditFilePage = ({ data }) => {
  console.log(data);
  const initialValuesBasicInformation = {
    fileNo: data.fileNo,
    securityCode: data.fileSecurityNo,
    type: data.fileType,
    status: data.status,
    projectName: data.projectName,
  };
  const initialValuesAssignment = {
    assignedTo: data.assignedTo,
    assignmentDate: data.assignedDate,
  };
  const initialValuesPricing = {
    unitPrice: data.unitPrice,
    minimumDeposit: data.minimumRequiredDeposit,
    percentage: data.depositPercentage,
    notes: '',
  };
  return (
    <Layout>
      <PageHeader title="Edit File" />
      <FilesForm
        initialValuesBasicInformation={initialValuesBasicInformation}
        initialValuesAssignment={initialValuesAssignment}
        initialValuesPricing={initialValuesPricing}
      />
    </Layout>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(
    `https://property-expert-backend-prod.herokuapp.com/plot-files/${id}`
  ).then((res) => res.json());
  return {
    props: { data },
  };
};
export default EditFilePage;
