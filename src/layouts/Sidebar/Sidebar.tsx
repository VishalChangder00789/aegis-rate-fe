import React from "react";
import appLogo from "../../assets/app-logo.png";
import userIcons from "../../assets/profile.png";

import dashboardIcon from "../../assets/dashboard.png";
import servicesIcon from "../../assets/services.png";
import trafficControlIcon from "../../assets/traffic.png";
import logsIcon from "../../assets/logs.png";
import alertsIcon from "../../assets/alerts.png";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [options] = React.useState([
    { name: "Dashboard", path: "/", icon: dashboardIcon },
    { name: "Services", path: "/services", icon: servicesIcon },
    {
      name: "Traffic Control",
      path: "/traffic-control",
      icon: trafficControlIcon,
    },
    { name: "Logs", path: "/logs", icon: logsIcon },
    { name: "Alerts", path: "/alerts", icon: alertsIcon },
  ]);

  return (
    <aside className="text-white fixed top-0 left-0 w-62.5 h-screen bg-[#0b0e11] p-4 flex flex-col justify-between text-sm">
      <div>
        <img src={appLogo} alt="App Logo" className="" />
        <div className="ml-1">
          {options &&
            options.length > 0 &&
            options.map((option) => {
              return (
                <div
                  key={option.name}
                  className="p-4 hover:bg-[#1f2328] cursor-pointer"
                  onClick={() => navigate(option.path)}
                >
                  <img
                    src={option.icon}
                    alt={`${option.name} Icon`}
                    className="inline-block mr-2"
                  />
                  <div className="inline-block">{option.name}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex justify-around p-2 cursor-pointer mb-2 bg-[#191c1f]">
        <img src={userIcons} alt="User Icon" />
        <div className="w-full flex flex-col p-1 ml-2">
          <div className="text-md">Username</div>
          <div className="text-xs">View Profile</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
