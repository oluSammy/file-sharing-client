import { AiOutlineShareAlt, AiOutlineCloudUpload } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiFolderReceivedLine } from "react-icons/ri";

const Sidebar = () => {
  const iconClassName = "text-white mr-5";
  const tabs = [
    {
      title: "upload",
      icon: <AiOutlineCloudUpload className={iconClassName} />,
    },
    { title: "images", icon: <IoImagesOutline className={iconClassName} /> },
    {
      title: "received",
      icon: <RiFolderReceivedLine className={iconClassName} />,
    },
    { title: "shared", icon: <FaRegShareSquare className={iconClassName} /> },
  ];
  return (
    <div>
      <div className="flex py-8 items-center justify-center">
        <div className="bg-[#3751FF] w-[30px] h-[30px] flex items-center justify-center rounded-full mr-4 text-white">
          <AiOutlineShareAlt />
        </div>
        <p className="text-[#A4A6B3] font-[700] ">Share Files</p>
      </div>

      <div className="flex lg:block">
        {tabs.map((tab) => (
          <NavLink
            to={`/dashboard/${tab.title}`}
            className={({ isActive }) =>
              `flex items-center lg:pl-6 pl-1 py-3 grow hover:bg-[#52545f] ${
                isActive ? "bg-[#52545f]" : ""
              }`
            }
            key={`${tab.title}`}
          >
            {tab.icon}
            <p className="text-[#DDE2FF] capitalize ">{tab.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
