import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex lg:flex-row flex-col  min-h-[100vh]">
      <div className="bg-[#363740] lg:w-[18%] w-[100%]">
        <Sidebar />
      </div>
      <div className="bg-[#F7F8FC] lg:w-[82%] w-[100%] ">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
