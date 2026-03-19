import React from "react";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div className="">Home</div>} />
      </Routes>
    </main>
  );
};

export default Main;
