import React, { useState } from "react";
import Table from "../components/Table";
import AdminTable from "../components/AdminTable"; // Import Admin Table

const Home = () => {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showAdminTable, setShowAdminTable] = useState(false);

  const handleNavigateUser = () => {
    setShowUserTable(!showUserTable);
    setShowAdminTable(false); // Hide Admin Table
  };

  const handleNavigateAdmin = () => {
    setShowAdminTable(!showAdminTable);
    setShowUserTable(false); // Hide User Table
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold m-8">
        Generation Thailand <br /> React Assessment
      </h1>
      <div className="flex justify-between gap-8 mt-4">
        <button
          onClick={handleNavigateUser}
          className="font-bold h-14 px-4 py-2 bg-[#334DD8] text-white rounded-xl hover:bg-[#2639A1] transition"
        >
          {showUserTable ? "Hide Table" : "User Home Sector"}
        </button>
        <button
          onClick={handleNavigateAdmin}
          className="font-bold px-4 py-2 bg-[#334DD8] text-white rounded-xl hover:bg-[#2639A1] transition"
        >
          {showAdminTable ? "Hide Table" : "Admin Home Sector"}
        </button>
      </div>

      {showUserTable && <Table />}
      {showAdminTable && <AdminTable />}
    </div>
  );
};

export default Home;
