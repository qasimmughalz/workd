import { Layout } from '../components/Layout';
import useSWR from 'swr';
import { Table } from '../components/Table';
import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { FileFilters } from '../components/FileFilters';
import fetcher from '../service/SWRFetcher';

const InventoryPage = () => {
  const { data, error } = useSWR('/api/inventory', fetcher);
  let tableData = null;

  if (data) {
    tableData = data.map((item) => {
      return {
        'FILE NUMBER': item.fileNo,
        'SECURITY CODE': item.fileSecurityNo,
        'FILE OWNER': item.lastfileAssigner,
        'CREATED DATE': item.createdAt,
        'ASSIGNED DATE': item.assignedDate,
        'PROJECT NAME': item.projectName,
        PRICE: item.unitPrice,
        ACTION: 'x x',
      };
    });
  }

  return (
    <Layout>
      <div className="bg-gray-100 h-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Inventory</h1>
          <button className="bg-yellow-500 text-semibold text-white px-2 py-1 rounded">
            + Add New File
          </button>
        </div>

        <div className="bg-white rounded-lg p-4">
          <FileFilters />
          {tableData && <Table data={tableData} />}
        </div>
      </div>
    </Layout>
  );
};

export default InventoryPage;
