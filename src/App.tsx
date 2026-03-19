import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./layouts/Sidebar/Sidebar";
import Navigation from "./layouts/Navigation/Navigation";
import Main from "./layouts/Main/Main";

function App() {
  return (
    <div className="flex bg-[#111417] min-h-screen">
      <Sidebar />
      <div className="flex flex-col ml-62.5 text-white">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
