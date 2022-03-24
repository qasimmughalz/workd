import { useRouter } from 'next/router';

export const AllFilesNewHeader = ({ children }) => {

  const router = useRouter()
    return (
      <div className="flex justify-between items-center mb-4 card">
        <div className=" flex  justify-around">
          <a href="" className='relative' onClick={()=> router.push('/files/all' ,undefined, {shallow: true}) }><h3 className="mx-4 bg-yellow p-1.5"  >Inventory</h3> </a> 
           <a href="" className='relative' onClick={()=> router.push('/files/new',undefined, {shallow: true})}><h3 className="mx-4 p-1.5">Add New File</h3></a>
           <a href="" className='relative' onClick={()=> router.push('/files/assignment',undefined, {shallow: true})}><h3 className="mx-4 p-1.5">File Assignment</h3></a>
           <a href="" className='relative' onClick={()=> router.push('/files/bulk', undefined,{shallow: true})}><h3 className="mx-4 p-1.5">Bulk Files Upload</h3></a>
           <a href="" className='relative' onClick={()=> router.push('/files/history',undefined, {shallow: true})}><h3 className="mx-4 p-1.5">Assignment History</h3></a>
          {/* <span className="w-full h-2 bg-primary"></span> */}
        </div>
  
        <div className="flex gap-x-4">{children}</div>
      </div>
    );
  };
  