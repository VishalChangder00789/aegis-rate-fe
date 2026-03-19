import React from "react";
import { Route, Routes } from "react-router-dom";
import RPSChart from "../../pages/RPSChart/RPSChart";

const Main: React.FC = () => {
  return (
    <main className="flex-1 p-4">
      <Routes>
        <Route path="/" element={<div className="">Home</div>} />
        <Route path="/services" element={<div className="">Services</div>} />
        <Route
          path="/traffic-control"
          element={<div className="">Traffic Control</div>}
        />
        <Route path="/logs" element={<div className="">Logs</div>} />
        <Route path="/alerts" element={<div className="">Alerts</div>} />
        <Route path="/rps-chart" element={<RPSChart />} />
      </Routes>
    </main>
  );
};

export default Main;
