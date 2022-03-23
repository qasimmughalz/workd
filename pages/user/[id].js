import { RiEditBoxLine } from 'react-icons/ri';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import { DescriptionCard, DescriptionItem } from '../files/[id]';

const UserCard = ({ data }) => {
  return (
    <div className="bg-gray-200 py-8 px-4">
      <div className="flex items-center gap-x-4">
        <div className="bg-gray-400 rounded-full w-24 h-24"></div>
        <div>
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <h3>
            <span className="font-semibold">Balance:</span>{' '}
            <span className="text-primary">10000 PKR</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

const UserPage = ({ data }) => {
  console.log(data);
  const handleEditClick = () => {
    router.push(`/user/edit/${id}`);
  };
  return (
    <Layout>
      <PageHeader title={data.name}>
        {/* <Button onClick={() => router.push(`/user/edit/${data.id}`)}>Edit File</Button>
        <Button color="black">Notes</Button> */}
      </PageHeader>
      <div className="flex justify-between items-center bg-gray-800 rounded h-16 text-white px-4">
        <h1 className="text-xl font-semibold">Dealer Information</h1>
        <button onClick={handleEditClick}>
          <RiEditBoxLine size="1.5rem" />
        </button>
      </div>
      <UserCard data={data} />
      <DescriptionCard title="">
        <DescriptionItem title="Parent Dealer" content="Shehroz Khan" />
        <DescriptionItem title="Company" content="State Life Insurance & Co." />
        <DescriptionItem title="Email" content="shehrozkhan76@gmail.com" />
        <DescriptionItem title="Password" content="******" />
        <DescriptionItem title="CNIC" content="37405-68279442-3" />
        <DescriptionItem title="Phone" content="+92 333 25739357" />
        <DescriptionItem
          title="Address"
          content="House No. 245, Street 6, H-13, Islamabad, Pakistan."
        />
      </DescriptionCard>
      <DescriptionCard title="Recent Transactions"></DescriptionCard>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(`https://property-expert-backend-prod.herokuapp.com/user/${id}`).then(
    (res) => res.json()
  );
  return {
    props: { data },
  };
};

export default UserPage;
