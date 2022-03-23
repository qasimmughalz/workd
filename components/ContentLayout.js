export const ContentLayout = ({ header, children }) => {
  return (
    <div className="bg-gray-100 h-full p-4 max-w-screen-2xl w-full container">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">{header}</h1>
      </div>

      <div className="container mx-auto">{children}</div>
    </div>
  );
};
