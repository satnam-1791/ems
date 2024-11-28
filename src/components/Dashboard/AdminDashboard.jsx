import React from "react";
import Header from "../common/Header";
import CreateTaskForm from "../common/CreateTaskForm";
import AllTask from "../common/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-10">
      <Header />
  <CreateTaskForm/>
  <AllTask/>
      </div>
  );
};

export default AdminDashboard;
