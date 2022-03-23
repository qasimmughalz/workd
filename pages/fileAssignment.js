import { ContentLayout } from '../components/ContentLayout';
import { FileFilters } from '../components/FileFilters';
import { Layout } from '../components/Layout';

const FileAssignmentPage = () => {
  return (
    <Layout>
      <ContentLayout header="File Assignment">
        <div className="card">
          <FileFilters />
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default FileAssignmentPage;
