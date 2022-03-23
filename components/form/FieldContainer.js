export const FieldContainer = ({ label, children }) => {
  return (
    <div className="">
      {label && (
        <label htmlFor="id" className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className={`w-full mt-1`}>{children}</div>
    </div>
  );
};
