import Image from 'next/image';
import useSWR from 'swr';
import { ContentLayout } from '../../components/ContentLayout';
import { Layout } from '../../components/Layout';
import fetcher from '../../service/SWRFetcher';
import EditIcon from '../../public/icons/edit.svg';
import { useRouter } from 'next/router';
import { PageHeader } from '../../components/PageHeader';
import { RiEditBoxLine } from 'react-icons/ri';


const Header = ({ id }) => {
  const router = useRouter();
  const handleEditClick = () => {
    router.push(`/society/edit/${id}`);
  };
  return (
    <div className="flex justify-between items-center bg-gray-800 rounded h-16 text-white px-4">
      <h1 className="text-xl font-semibold">Owner Information</h1>
      <button onClick={handleEditClick}>
        <RiEditBoxLine size="1.5rem" />
      </button>
    </div>
  );
};

const InfoText = ({ title, children }) => {
  return (
    <div className="flex justify-start mb-4">
      <p className="mr-8 w-16">{title} </p>
      <p className="italic">{children}</p>
    </div>
  );
};

const SocietyInfo = ({ society }) => {
  return (
    <div className="p-4">
      {/* section 1 */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="rounded-full bg-gray-200 w-20 h-20 relative">
          <Image src="/societyLogo.png" layout="fill" alt="logo" />
        </div>
        <div>
          {/* <div>{society.societyId}</div> */}
          <div>{society.societyName}</div>
          <div
            className={`font-lg font-semibold ${
              society.legalStatus === 'CERTIFIED' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {society.legalStatus === 'CERTIFIED' ? 'APPROVED' : 'NOT APPROVED'}
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="mb-8">
        <InfoText title="Email:">info@statelifeinsurance.com</InfoText>
        <InfoText title="Phone:">+92 333 25739357</InfoText>
        <InfoText title="Address:">Office No. 345, Building A, H-13, Islamabad, Pakistan.</InfoText>
        <InfoText title="Website:">www.statelifeinsurance.com</InfoText>
      </div>
      {/* section 3 */}
      <div>
        <h3 className="text-xl font-semibold">Development company Info</h3>
        <div className="h-1 w-full bg-primary my-4"></div>
        <div className="mb-8">
          <InfoText title="Name:">State Life & Co</InfoText>
          <InfoText title="Email:">www.statelifeandco.com</InfoText>
          <InfoText title="Phone:">+92 345 79755792</InfoText>
          <InfoText title="Address:">
            Office No. 345, Building A, H-13, Islamabad, Pakistan.
          </InfoText>
          <InfoText title="Previous Projects:">-</InfoText>
        </div>
      </div>
    </div>
  );
};
const OwnerInfo = ({ society }) => {
  // Same line as above
  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <div>
        <Header id={society.id} />
        <div className="py-8">
          <InfoText title="Type:">info@statelifeinsurance.com</InfoText>
          <InfoText title="Phone No:">+92 333 25739357</InfoText>
          <InfoText title="Previous Projects:">
            Office No. 345, Building A, H-13, Islamabad, Pakistan.
          </InfoText>
          <InfoText title="Legal Status:">www.statelifeinsurance.com</InfoText>
          <InfoText title="Area:">+92 333 25739357</InfoText>
          <InfoText title="Map:">Office No. 345, Building A, H-13, Islamabad, Pakistan.</InfoText>
        </div>
      </div>

      <div className="bg-gray-600 h-96 rounded relative overflow-hidden">
        <Box sx={{ height: '24rem' }}>
          <Image src="/map.png" layout="fill" objectFit="cover" alt="map" />
        </Box>
      </div>
    </div>
  );
};

const ProfilePage = ({ society }) => {
  console.log(society);
  return (
    <Layout>
      <PageHeader title={society.societyName}></PageHeader>
      <div className="card flex h-full">
        <div className="w-2/5 h-full  mr-4">
          <SocietyInfo society={society} />
        </div>
        <div className=" w-full ">
          <OwnerInfo society={society} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  // TODO
  const society = await fetch(
    `https://property-expert-backend-prod.herokuapp.com/society/${id}`
  ).then((res) => res.json());
  return {
    props: { society },
  };
};

export default ProfilePage;
