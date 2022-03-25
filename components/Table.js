import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTable  } from 'react-table';
import EyeIcon from '../public/icons/eye.svg';
import EditIcon from '../public/icons/edit.svg';
import DeleteIcon from '../public/icons/delete.svg';
import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '../service/SWRFetcher';


// export const Table = ({ data, withLinks }) => {
//   const renderHeader = () => {
//     let headers = Object.keys(data[0]);
//     return headers.map((header) => (
//       <th
//         key={header}
//         className=" px-4 h-12 text-left font-semibold bg-gray-100 border-b-2 text-gray-500"
//       >
//         {header}
//       </th>
//     ));
//   };
//   const renderData = () => {
//     return data.map((item, index) => {
//       console.log(item);
//       if (withLinks) {
//         return (
//           <Link href={`/society/${item['SOCIETY ID']}`} passHref>
//             <tr
//               key={item}
//               className={`  hover:cursor-pointer h-16 text-left ${
//                 index % 2 === 0 ? '' : 'bg-gray-100'
//               }`}
//             >
//               {Object.values(item).map((value, index) => {
//                 // temporary workaround for images
//                 if (value.includes('.png')) {
//                   return (
//                     <td className="max-w-xs px-4 flex justify-center items-center h-16" key={index}>
//                       <Image src={`${value}`} alt="logo" width={'48px'} height={'48px'} />
//                     </td>
//                   );
//                 }
//                 return (
//                   <td className=" px-4" key={index}>
//                     {value}
//                   </td>
//                 );
//               })}
//             </tr>
//           </Link>
//         );
//       } else {
//         return (
//           <tr key={item} className={` h-16 text-left ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
//             {Object.values(item).map((value, index) => {
//               return (
//                 <td className=" px-4" key={index}>
//                   {value}
//                 </td>
//               );
//             })}
//           </tr>
//         );
//       }
//     });
//   };
//   return (
//     <div className="w-full ">
//       <table className="block xl:table w-full bg-white table-auto border-collapse whitespace-nowrap overflow-y-scroll text-xs border-2 rounded ">
//         <thead className="">
//           <tr className="">{renderHeader()}</tr>
//         </thead>
//         <tbody className="">{renderData()}</tbody>
//       </table>
//     </div>
//   );
// };








const ActionMenu = ({ id }) => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR('/api/society', fetcher);
  const router = useRouter();
  const path = router.pathname.split('/')[1];
  console.log(path);

  const handleView = () => {
    router.push(`/${path}/${id}`);
  };
  const handleEdit = async () => {
    router.push(`/${path}/edit/${id}`);
  };
  const handleDelete = async () => {
    mutate(
      `/api/${path}`,
      data.filter((item) => String(item.id) !== String(id)),
      false
    );
    await fetch(`https://property-expert-backend-prod.herokuapp.com/${path}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
  return (
    <div className="flex items-center">
      <button onClick={handleView}>
        <EyeIcon />
      </button>

      <button onClick={handleEdit}>
        <EditIcon />
      </button>

      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};



export const Table = ({ tableData }) => {
  const data = React.useMemo(() => {
    return tableData;
  }, [tableData]);

  const columns = React.useMemo(() => {
    let headers = Object.keys(tableData[0]);
    return headers.map((header) => {
      return { Header: header, accessor: header};
    });
  }, [tableData]);

  const tableInstance = useTable({ columns, data } );
  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } = tableInstance;




  return (
    <div>
      <table
        {...getTableProps()}
        className="sm:table md:block lg:table w-full bg-white table-auto border-collapse whitespace-nowrap overflow-y-scroll text-xs border-2 rounded "
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  className="text-sm px-4 h-12 text-left font-semibold bg-gray-100 border-b-2 text-gray-500"
                  key={index}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
               
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, index) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  className={` h-16 text-left ${index % 2 === 0 ? '' : 'bg-gray-100'}`}
                  key={index}
                  {...row.getRowProps()}
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, index) => {
                      // Apply the cell props
                      // console.log(cell);
                      return (
                        <td className=" px-4 " key={index} {...cell.getCellProps()}>
                          {String(cell.value).includes('.png') ? (
                            <div className="flex justify-center items-center">
                              <Image
                                src={`${cell.value}`}
                                alt="logo"
                                width={'48px'}
                                height={'48px'}
                              />
                            </div>
                          ) : cell.column.id === 'ACTION' ? (
                            <ActionMenu id={cell.value} />
                          ) : (
                            cell.render('Cell')
                          )}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
