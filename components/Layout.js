import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const Layout = (props) => {
  const { children } = props;

  return (
    <div className="flex h-screen text-sm">
      <Sidebar />
      <div className="flex flex-1 overflow-hidden bg-gray-100 h-full">
        <div className="flex flex-1 overflow-y-scroll">
          <div className="w-full">
            <TopBar />
            <div className="container mx-auto px-4 pb-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
