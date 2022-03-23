export const PageHeader = ({ title, children }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="  flex flex-col">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="w-full h-2 bg-primary"></span>
      </div>

      <div className="flex gap-x-4">{children}</div>
    </div>
  );
};
