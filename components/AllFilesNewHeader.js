export const AllFilesNewHeader = ({ children }) => {
    return (
      <div className="flex justify-between items-center mb-4">
        <div className=" flex  justify-around">
          <h3 className="">Inventory</h3>
          <h3 className="">Add New File</h3>
          <h3 className="">File Assignment</h3>
          <h3 className="">Bulk Files Upload</h3>
          <h3 className="">Assignment History</h3>
          {/* <span className="w-full h-2 bg-primary"></span> */}
        </div>
  
        <div className="flex gap-x-4">{children}</div>
      </div>
    );
  };
  