import { Layout } from '../../../components/Layout';
import { PageHeader } from '../../../components/PageHeader';
import { SocietyForm } from '../../../components/SocietyForm';

const EditSocietyPage = ({ society }) => {
  console.log(society);
  const initialValues = {
    id: society.societyId,
    name: society.societyName,
    phone: society.contactNo,
    email: '',
    address: '',
    website: '',
    type: '',
    ownerPhone: '',
    ownerPrevProject: '',
    legalStatus: society.legalStatus === 'CERTIFIED' ? 'Certified' : 'Not Certified',
    area: society.area,
    map: '',
    companyName: society.developerCompanyName,
    companyPhone: '',
    companyPrevProjects: '',
    companyEmail: '',
    companyAddress: '',
  };
  const postSociety = () => {
    return null;
  };
  return (
    <Layout>
      <PageHeader title="Edit Society" />
      <SocietyForm initialValues={initialValues} onSubmit={postSociety} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(`https://property-expert-backend-prod.herokuapp.com/society/${id}`).then(
    (res) => res.json()
  );

  return {
    props: {
      society: data,
    },
  };
};

export default EditSocietyPage;
