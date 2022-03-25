import useSWR from 'swr';
import { Button } from '../../components/Button';
import { PageHeader } from '../../components/PageHeader';
import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';
import fetcher from '../../service/SWRFetcher';
import PlusIcon from '../../public/icons/plus.svg';
import { useRouter } from 'next/router';
import { TableFilters } from '../../components/TableFilters';
import { TextField } from '../../components/form/TextField';
import { SelectField } from '../../components/form/TextField';
import {AllFilesNewHeader} from '../../components/AllFilesNewHeader'
import { useEffect, useState } from 'react';

const FileFilters = () => {
  return (
    <TableFilters>
      <div className="flex divide-x-2 gap-x-4">
        <div className="flex gap-x-4">
          <TextField placeholder="Project Name" />
          <TextField placeholder="Status" />
          <TextField placeholder="Type" />
        </div>
        <div className="flex pl-2">
          <button className="underline">Show advanced filters</button>
        </div>
      </div>
    </TableFilters>
  );
};

const AllFilesPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  const { data, error } = useSWR(
    'https://property-expert-backend-prod.herokuapp.com/plot-files',
    fetcher
  );


    let tableData;
    
    const [security, setSecurity] = useState('')
    const [ApiData, setAPiData] = useState(data)




  
    if(data){
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
    })
  }
  
  


    function handleFilter(incoming){

        if(security !== ''){
          setSecurity(incoming)
            const filteredData = data.filter((val)=>{
              return val.fileSecurityNo.toLowerCase().includes(security.toLowerCase());
            })
            setAPiData(filteredData)

            tableData = filteredData.map((item) => {
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
        else{
          setAPiData(data)
          tableData = ApiData.map((item) => {
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
        })
        }
  }

 


  return (
    <Layout>
      <AllFilesNewHeader>
        <Button icon={<PlusIcon />} onClick={() => router.push('/files/new' , {shallow:true})}>
          Add New File
        </Button>
      </AllFilesNewHeader>
      <div className="card mb-4">
        <input value={security} onChange={(e)=> handleFilter(e.target.value)} placeholder="Enter name" className="input my-3 form-input border-gray-300"></input>
      </div>
      <div className="card">{data && <Table tableData={tableData} />}</div>
    </Layout>
  );
};

export default AllFilesPage;
