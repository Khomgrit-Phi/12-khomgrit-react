import React from "react";
import {useNavigate } from "react-router-dom";

  const Home = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleNavigate = () => {
    navigate("/owner");
=======
  const handleNavigateUser = () => {
    navigate("/about");
>>>>>>> a93ce968d7ae8d8dd467d327078a74538edbfc4f
  };
  const handleNavigateAdmin = () => {
    navigate("/contact");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold m-8">Generation Thailand <br /> React Assessment</h1>
      <div className="flex justify-between gap-8 mt-4">
      <button
        onClick={handleNavigateUser}
        className="font-bold h-14 px-4 py-2 bg-[#334DD8] text-white rounded-xl hover:bg-[#2639A1] transition"
      >
        User Home Sector
      </button>
      <button
        onClick={handleNavigateAdmin}
        className="font-bold px-4 py-2 bg-[#334DD8] text-white rounded-xl hover:bg-[#2639A1] transition"
      >
        Admin Home Sector
      </button>
      </div>

    </div>
  );
};

export default Home;
