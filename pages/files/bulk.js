import { useRef } from 'react';
import { Layout } from '../../components/Layout';
import { PageHeader } from '../../components/PageHeader';
import {AllFilesNewHeader} from '../../components/AllFilesNewHeader'

const BulkFileUploadPage = () => {
  const fileInputField = useRef(null);
  return (
    <Layout>
       <AllFilesNewHeader/>
      <PageHeader title="Bulk File Upload" />
      <div className="card h-96 flex justify-center items-center">
        <input className=" w-full h-full" type="file" ref={fileInputField} />
      </div>
    </Layout>
  );
};

export default BulkFileUploadPage;
