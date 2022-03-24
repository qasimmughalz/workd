import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import {AllFilesNewHeader} from '../../components/AllFilesNewHeader'

export const DescriptionItem = ({ title, content }) => (
  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
    <dt className="text-sm font-medium text-gray-500">{title}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{content}</dd>
  </div>
);
export const DescriptionCard = ({ title, children }) => (
  <div className="card mb-4">
    <div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
      <dl className="border rounded-md overflow-hidden divide-y divide-solid ">{children}</dl>
    </div>
  </div>
);

const SingleFilePage = ({ data }) => {
  const router = useRouter();
  return (
    <Layout>
      <AllFilesNewHeader/>
      <PageHeader
        title={`Muhammad Waqas
            Cheema - ${data.fileNo}`}
      >
        <Button onClick={() => router.push(`/files/edit/${data.id}`)}>Edit File</Button>
        <Button color="black">Notes</Button>
      </PageHeader>

      <DescriptionCard title="Basic Information">
        <DescriptionItem title="Project Name" content={data.projectName} />
        <DescriptionItem title="File Number" content={data.fileNo} />
        <DescriptionItem title="Security Code" content={data.fileSecurityNo} />
        <DescriptionItem title="Type" content={data.fileType} />
        <DescriptionItem title="Status" content={data.status} />
      </DescriptionCard>

      <DescriptionCard title="Assignment Information">
        <DescriptionItem title="Assigned To" content={data.assignedTo} />
        <DescriptionItem title="Assignment Date" content={data.assignedDate} />
        <DescriptionItem title="Received By" content={data.recievedBy} />
        <DescriptionItem title="Received Date" content={data.recievedDate} />
      </DescriptionCard>

      <DescriptionCard title="Pricing Information">
        <DescriptionItem title="Unit Price" content={data.unitPrice} />
        <DescriptionItem title="Minimum Deposit" content={data.minimumRequiredDeposit} />
        <DescriptionItem
          title="Minimum Deposit Percentage"
          content={`${data.depositPercentage}%`}
        />
      </DescriptionCard>
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

export default SingleFilePage;
