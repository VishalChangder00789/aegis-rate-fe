import React from "react";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main className="flex-1 p-4">
      <Routes>
        <Route path="/" element={<div className="">Home</div>} />
      </Routes>
    </main>
  );
};

export default Main;
