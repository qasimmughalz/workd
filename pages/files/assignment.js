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
      <div className='custom-box'>
          <div className="card">{tableData && <Table tableData={tableData} />}</div>
      </div>
      <div className='mydflex '>
          <div className=''> 
              <div className='heading flex justify-between'>
                    <div><h1 className='text-2xl font-semibold'>File Assignment</h1></div>
                    <div><button className="btn-yellow">Al-Furqan Propertise </button> <button className='btn-normal'>others</button></div>
              </div>

              <div className='flex items-center'>
                <label className='label'>Assigned to</label>
                <input className='   input my-3 form-input border-gray-300 '></input>
              </div>

              <div className='flex items-center'>
                <label className='label'>Assignment Date</label>
                <input className='   input my-3 form-input border-gray-300 '></input>
              </div>


              <div className='flex items-center'>
                  <input type="radio" className='mr-1'></input>
                  <p>Please uncheck if you want to received data and receiving person to be different</p>
              </div>
              

          </div>
          <div className=''>

          </div>
      </div>
  
    </Layout>
  );
};

export default FileAssignmentPage;
