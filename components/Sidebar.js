import DashboardIcon from '../public/icons/dashboard.svg';
import InventoryIcon from '../public/icons/inventory.svg';
import AddNewFileIcon from '../public/icons/addNewFile.svg';
import FileAssignmentIcon from '../public/icons/fileAssignment.svg';
import BulkFileUploadIcon from '../public/icons/bulkFileUpload.svg';
import AssignmentHistoryIcon from '../public/icons/assignmentHistory.svg';
import UserManagementIcon from '../public/icons/userManagement.svg';
import CloseIcon from '../public/icons/close.svg';
import Link from 'next/link';
import { Dialog, Menu, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import BrandIconName from '../public/brand.svg';
import BrandIcon from '../public/brandIcon.svg';
import {
  RiDashboardLine,
  RiCommunityLine,
  RiMenuUnfoldLine,
  RiMenuFoldLine,
  RiArrowDownSLine,
  RiFolderAddLine,
  RiFileListLine,
} from 'react-icons/ri';

const iconSize = '1.25rem';

const NavDropdownButton = ({ icon, isExpanded, text }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <a
      onClick={() => setIsActive(!isActive)}
      className={`flex justify-center  hover:bg-gray-200 p-2 rounded-md text-gray-600 hover:text-gray-800 hover:cursor-pointer w-full ${
        isActive ? 'bg-gray-200 text-gray-800 rounded-b-none' : ''
      }`}
    >
      {isExpanded ? (
        <div
          className={`w-full flex items-center ${isExpanded ? 'justify-start' : 'justify-center'}`}
        >
          <div className="min-w-fit">{icon}</div>
          {isExpanded && (
            <p className="font-semibold ml-4 flex items-center justify-between w-full">
              {text} <RiArrowDownSLine size={iconSize} />
            </p>
          )}
        </div>
      ) : (
        icon
      )}
    </a>
  );
};

const NavItem = ({ icon, link, isExpanded, text }) => {
  const content = (
    <a
      className={`flex justify-center  hover:bg-gray-200 p-2 rounded-md text-gray-600 hover:text-gray-800 hover:cursor-pointer w-full 
      `}
    >
      {isExpanded ? (
        <div
          className={`w-full flex items-center ${isExpanded ? 'justify-start' : 'justify-center'}`}
        >
          {icon}
          {isExpanded && <p className="font-semibold ml-4">{text}</p>}
        </div>
      ) : (
        icon
      )}
    </a>
  );
  return (
    <li
      className={` flex items-center ${isExpanded ? 'justify-between w-full' : 'justify-center'}`}
    >
      {link ? <Link href={link}>{content}</Link> : <div>{content}</div>}
    </li>
  );
};

const NavDropdown = ({ button, isExpanded, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const renderLinks = () => {
    return links.map((link, index) => (
      <Menu.Item key={index} className="pl-4">
        <Link href={link.href}>
          <a
            className={`rounded-md py-2 my-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 hover:cursor-pointer "`}
          >
            <div
              className={` w-full flex  ${isExpanded ? 'pl-10 justify-start' : 'justify-center'}`}
            >
              <span className="flex justify-center">{link.icon}</span>
              {isExpanded && <span className="pl-4">{link.text}</span>}
            </div>
          </a>
        </Link>
      </Menu.Item>
    ));
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <Menu className="w-full">
      <li className="flex items-center justify-between w-full">
        <a className="  w-full">
          <div>
            <Menu.Button
              onClick={handleClick}
              className={`rounded-md text-gray-600 hover:text-gray-800 hover:cursor-pointer${
                isExpanded ? 'justify-between w-full' : 'justify-center'
              } w-full flex items-center justify-start`}
            >
              {button}
            </Menu.Button>
            <Menu.Items
              className={` ${
                isExpanded ? 'px-2' : 'px-1'
              } font-semibold w-full flex flex-col bg-gray-100 rounded-b-md`}
            >
              {renderLinks()}
              {/* <Menu.Item className="hover:bg-gray-200 p-2 rounded-md text-gray-600 hover:text-gray-800 hover:cursor-pointer w-full">
                <div>Add New Society</div>

                <NavItem
                  text="Add New Society"
                  isExpanded={isExpanded}
                  icon={<RiFolderAddLine size={iconSize} />}
                />
              </Menu.Item> */}
            </Menu.Items>
          </div>
        </a>
      </li>
    </Menu>
  );
};

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const societyLinks = [
    {
      text: 'Add New Society',
      href: '/society/new',
      icon: <RiFolderAddLine size={iconSize} />,
    },
    {
      text: 'Show All Societies',
      href: '/society/all',
      icon: <RiCommunityLine size={iconSize} />,
    },
  ];
  const fileLinks = [
    {
      text: 'Add New File',
      href: '/files/new',
      icon: <RiFileListLine size={iconSize} />,
    },
    {
      text: 'Show All Files',
      href: '/files/all',
      icon: <RiFileListLine size={iconSize} />,
    },
    {
      text: 'File Assignment',
      href: '/files/assignment',
      icon: <RiFileListLine size={iconSize} />,
    },
    {
      text: 'Bulk File Upload',
      href: '/files/bulk',
      icon: <RiFileListLine size={iconSize} />,
    },
    {
      text: 'File History',
      href: '/files/history',
      icon: <RiFileListLine size={iconSize} />,
    },
  ];

  const userLinks = [
    {
      text: 'Add New User',
      href: '/user/new',
      icon: <RiFileListLine size={iconSize} />,
    },
    {
      text: 'Show All Users',
      href: '/user/all',
      icon: <RiFileListLine size={iconSize} />,
    },
  ];

  return (
    <>
      <div
        className={`${
          isExpanded ? 'w-72' : 'w-16'
        } h-screen px-2 py-4 border-r-2 w-full  bg-white shadow-lg z-10 flex flex-col items-center`}
      >
        <div
          className={`h-8 mb-8 w-full flex items-center ${
            isExpanded ? 'justify-between' : 'justify-center'
          }`}
        >
          {isExpanded && (
            <div className="flex justify-center">
              <BrandIcon />
            </div>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md text-gray-600 hover:text-gray-800 hover:cursor-pointer"
          >
            {isExpanded ? <RiMenuFoldLine size={iconSize} /> : <RiMenuUnfoldLine size={iconSize} />}
          </button>
        </div>

        <ul className="flex flex-col items-center w-full gap-y-4">
          <NavItem
            text="Dashboard"
            icon={<RiDashboardLine size={iconSize} />}
            link="/society/all"
            isExpanded={isExpanded}
          />
          <div className="border-b-2 w-full"></div>
          <NavDropdown
            links={societyLinks}
            isExpanded={isExpanded}
            button={
              <NavDropdownButton
                text="Society Management"
                icon={<RiCommunityLine size={iconSize} />}
                isExpanded={isExpanded}
              />
            }
          />
          <NavDropdown
            links={fileLinks}
            isExpanded={isExpanded}
            button={
              <NavDropdownButton
                text="File Management"
                icon={<RiFileListLine size={iconSize} />}
                isExpanded={isExpanded}
              />
            }
          />
          <NavDropdown
            links={userLinks}
            isExpanded={isExpanded}
            button={
              <NavDropdownButton
                text="User Management"
                icon={<RiFileListLine size={iconSize} />}
                isExpanded={isExpanded}
              />
            }
          />
        </ul>
      </div>
    </>
  );
};
